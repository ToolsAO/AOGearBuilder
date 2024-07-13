import { GifEncoder } from '@skyra/gifenc'
import { ImageData, createCanvas, loadImage, type SKRSContext2D } from '@napi-rs/canvas'
import type { RequestHandler } from './$types'
import { Player } from '$lib/gearBuilder/playerClasses';
import db from '$lib/dbHandler';
import { calculateEfficiencyPoints } from '$lib/utils/calculateEfficiencyPoints';
import { error } from '@sveltejs/kit';
import { buffer } from 'node:stream/consumers';

export const GET: RequestHandler = (async ({url, setHeaders}) => {
    try {

        let times = [];

        times.push(Date.now())

        let code = decodeURI(url.searchParams.get('code') || "");
        times.push(Date.now())

        const database = await db.collection("items").find({}, { projection: { _id: 0 } }).toArray() as [];
        times.push(Date.now())

        let SessionPlayer = new Player(database, 140);
        SessionPlayer.loadBuildCode(database, "136|1|0|0|0|0|AAZ.Tf4.AAu.0ma.XUx.130|ceB.I13.AAE.CBH.AAF.130|AAS.AAD.AAE.AAF.AAF.AAF.130|AAd.AAD.AAE.AAF.AAF.130|AAC.AAD.AAE.0");
        let stats = SessionPlayer.build.getBuildStats();
        let efficiencyPointsString = calculateEfficiencyPoints(stats, SessionPlayer.level).toString();
        times.push(Date.now())

        let width = 1200;
        let height = 630;

        let images = {
            "items":{},
            "stat":{}
        }



        async function getImage(imageurl:string) {
            let temp = await loadImage(imageurl).catch((e) => {console.error(e.message+" "+imageurl);})
            return temp;
        }

        const getHeight = (measure) => measure.actualBoundingBoxAscent + measure.actualBoundingBoxDescent;

        function getTextSize(ctx:SKRSContext2D, text:string, fontface, box) {

    
            var fontsize = 100;
            ctx.font = fontsize + "px " + fontface
    
            while ((ctx.measureText(text).width > box[2] - box[0] || getHeight(ctx.measureText(text)) > box[3] - box[1]) && fontsize > 1){
                fontsize--;
                ctx.font = fontsize + "px " + fontface;
            }
    
            return fontsize;
        }
    
        function drawTextFit(ctx, text, fontface, box, widthcenter=null, heightcenter=null, overrideFontSize=null) {

            /*ctx.rect(box[0], box[1], (box[2] - box[0]), (box[3] - box[1]));
            ctx.stroke();*/
    
            var fontsize = 100;
            ctx.font = fontsize + "px " + fontface
    
            while ((ctx.measureText(text).width > box[2] - box[0] || getHeight(ctx.measureText(text)) > box[3] - box[1]) && fontsize > 1 && overrideFontSize == null){
                fontsize--;
                ctx.font = fontsize + "px " + fontface;
            }
    
            if (overrideFontSize != null) {
                fontsize = overrideFontSize;
                ctx.font = fontsize + "px " + fontface;
            }
    
            if (widthcenter) {
                box[0] = box[0]+(((box[2] - box[0])-ctx.measureText(text).width)/2);
            }
            if (heightcenter) {
                box[3] = box[3]-(((box[3] - box[1])-getHeight(ctx.measureText(text)))/2);
            }
            /*ctx.rect(box[0], box[3]-getHeight(ctx.measureText(text)), (box[2] - box[0]), getHeight(ctx.measureText(text)));
            ctx.stroke();*/
            ctx.fillText(text, box[0], box[3]);
            ctx.strokeText(text, box[0], box[3]);
        }

        async function drawItemImage(ctx:SKRSContext2D, item, x:number, y:number, w:number, h:number) {
            let image = await images["items"][item.id];
            if (image) {
                ctx.drawImage(image, x, y, w, h);
            } else {
                ctx.fillStyle = '#000000';
                ctx.fillRect(x, y, w, h);

                ctx.strokeStyle = '#FFFFFF';
                ctx.fillStyle = '#FFFFFF';
                drawTextFit(ctx, item.name, "Calibri", [x, y, x+w, y+h], true, true);
            }
        }
        times.push(Date.now())

        let itemStats: Record<string, Record<string, string>> = {
            power: { name: 'POWER', fillColor: '#FF8400', strokeColor: '#000000', suffix: '' },
            defense: { name: 'DEFENSE', fillColor: '#737373', strokeColor: '#000000', suffix: '' },
            agility: { name: 'AGILITY', fillColor: '#FFFFFF', strokeColor: '#00ffff', suffix: '' },
            attackSpeed: { name: 'ATTACK SPEED', fillColor: '#FFFFFF', strokeColor: '#0077ff', suffix: '' },
            attackSize: { name: 'ATTACK SIZE', fillColor: '#00FF00', strokeColor: '#471559', suffix: '' },
            intensity: { name: 'INTENSITY', fillColor: '#FFF200', strokeColor: '#712402', suffix: '' },
            regeneration: {
                name: 'REGENERATION',
                fillColor: '#C0FFC0',
                strokeColor: '#35D234',
                suffix: ''
            },
            piercing: { name: 'PIERCING', fillColor: '#FFD6AB', strokeColor: '#E22A1D', suffix: '' },
            resistance: { name: 'RESISTANCE', fillColor: '#89ABC6', strokeColor: '#000000', suffix: '' },
    
            powerIncrement: { name: 'POWER', fillColor: '#FF8400', strokeColor: '#000000', suffix: '' },
            defenseIncrement: { name: 'DEFENSE', fillColor: '#737373', strokeColor: '#000000', suffix: '' },
            agilityIncrement: { name: 'AGILITY', fillColor: '#FFFFFF', strokeColor: '#00ffff', suffix: '' },
            attackSpeedIncrement: {
                name: 'ATTACK SPEED',
                fillColor: '#FFFFFF',
                strokeColor: '#0077ff',
                suffix: ''
            },
            attackSizeIncrement: {
                name: 'ATTACK SIZE',
                fillColor: '#00FF00',
                strokeColor: '#471559',
                suffix: ''
            },
            intensityIncrement: {
                name: 'INTENSITY',
                fillColor: '#FFF200',
                strokeColor: '#712402',
                suffix: ''
            },
            regenerationIncrement: {
                name: 'REGENERATION',
                fillColor: '#C0FFC0',
                strokeColor: '#35D234',
                suffix: ''
            },
            piercingIncrement: {
                name: 'PIERCING',
                fillColor: '#FFD6AB',
                strokeColor: '#E22A1D',
                suffix: ''
            },
            resistanceIncrement: {
                name: 'RESISTANCE',
                fillColor: '#89ABC6',
                strokeColor: '#000000',
                suffix: ''
            },
    
            insanity: { name: 'INSANITY', fillColor: '#8B27DB', strokeColor: '#DB0C45', suffix: '' },
            drawback: { name: 'DRAWBACK', fillColor: '#DC4040', strokeColor: '#000000', suffix: '' },
            warding: { name: 'WARDING', fillColor: '#FFFFFF', strokeColor: '#CBCB55', suffix: '' },
    
            stability: { name: 'STABILITY', fillColor: '#6297C1', strokeColor: '#124975', suffix: '%' },
            durability: { name: 'DURABILITY', fillColor: '#737373', strokeColor: '#000000', suffix: '' },
            magicStorage: {
                name: 'MAGIC STORAGE',
                fillColor: '#BA70EB',
                strokeColor: '#000000',
                suffix: ''
            },
            turning: { name: 'TURNING', fillColor: '#FFFFFF', strokeColor: '#584A8C', suffix: '' },
            speed: { name: 'SPEED', fillColor: '#FFFFFF', strokeColor: '#00ffff', suffix: '' },
            resilience: { name: 'RESILIENCE', fillColor: '#FFFFFF', strokeColor: '#AF2230', suffix: '%' },
            ramStrength: { name: 'RAM STRENGTH', fillColor: '#FF8400', strokeColor: '#000000', suffix: '' },
            ramDefense: { name: 'RAM DEFENSE', fillColor: '#FFFFFF', strokeColor: '#6B6BD7', suffix: '' }
        };
        times.push(Date.now())

        for (const [slotKey, slot] of Object.entries(SessionPlayer.build.slots)) {
            if (!(slot.armor.id in images["items"])) {
                images["items"][slot.armor.id] = getImage(slot.armor.imageId).catch((e) => {console.error(e.message);});
            };
            console.log(slot.enchant.imageId)
            if (!(slot.enchant.id in images["items"])) {
                images["items"][slot.enchant.id] = getImage(slot.enchant.imageId).catch((e) => {console.error(e.message);});
            };
            console.log(images["items"][slot.enchant.id])
            if (!(slot.modifier.id in images["items"])) {
                images["items"][slot.modifier.id] = getImage(slot.modifier.imageId).catch((e) => {console.error(e.message);});
            };
            for (let gem of slot.gems) {
                if (!(gem.id in images["items"])) {
                    images["items"][gem.id] = getImage(gem.imageId).catch((e) => {console.error(e.message);});
                };
            }
        }
        console.log(images["items"])
        times.push(Date.now())


        for (const [statKey, stat] of Object.entries(stats)) {
            images["stat"][statKey] = getImage(url.origin+`/assets/images/stats/${statKey}.png`).catch((e) => {console.error(e.message);});
        }
        times.push(Date.now())



        const canvas = createCanvas(width, height)
        const ctx = canvas.getContext('2d', {alpha: false})
        ctx.imageSmoothingQuality = "high";

        const bgCanvas = createCanvas(width, height);
        const bgctx = bgCanvas.getContext('2d', {alpha: false});
        bgctx.imageSmoothingQuality = "high";
        bgctx.fillStyle = '#343434';//'#27272a'; 4a5866 010329 1735ac 041aa3 343434
        bgctx.fillRect(0, 0, width, height);
        bgctx.lineWidth = 2;
        bgctx.strokeStyle = "#FFFFFF";
        bgctx.rect(600, 10, (width/2)-10, height-(10*2));
        bgctx.stroke();

        console.log(SessionPlayer.build.getBuildStats())
        times.push(Date.now())

        /*
        {
			power: 0,
			defense: 0,
			agility: 0,
			attackSpeed: 0,
			attackSize: 0,
			intensity: 0,
			regeneration: 0,
			piercing: 0,
			resistance: 0,
			insanity: 0,
			warding: 0,
			drawback: 0
		}
        */

        /*bgctx.fillStyle = '#FFFFFF';
        drawTextFit(bgctx, "Stats", "Calibri", [600, 20, width-10, 70], true, true);*/

        let textHeight = 42;

        let statFontSize = 100;
        for (const [index, [statKey, stat]] of Object.entries(Object.entries(stats))) {
            let tempsize = getTextSize(bgctx, "+ "+(stats[statKey]).toString()+" "+statKey.toUpperCase(), "Calibri", [660, 20+((parseInt(index))*textHeight)+1, 1190, 20+((parseInt(index))*textHeight)+textHeight-1]);
            if (tempsize < statFontSize) {
                statFontSize = tempsize;
            }
        }
        times.push(Date.now())

        let usedStats:number = 0;
        for (const [index, [statKey, stat]] of Object.entries(Object.entries(stats))) {
            if (stats[statKey] != 0) {
                if ("fillColor" in itemStats[statKey]) {
                    bgctx.fillStyle = itemStats[statKey]["fillColor"];
                }
                if ("strokeColor" in itemStats[statKey] && itemStats[statKey]["strokeColor"] != "#000000") {
                    bgctx.strokeStyle = itemStats[statKey]["strokeColor"];
                } else if ("fillColor" in itemStats[statKey]) {
                    bgctx.strokeStyle = itemStats[statKey]["fillColor"];
                }
                drawTextFit(bgctx, "+ "+(stats[statKey]).toString()+" "+statKey.toUpperCase(), "Calibri", [660, 20+((usedStats)*textHeight)+1, 1190, 20+((usedStats)*textHeight)+textHeight-1], false, true, statFontSize);
                
                let statimage = await images["stat"][statKey];
                let extraImage = (60-((statimage.width/statimage.height)*textHeight))/2;
                bgctx.drawImage(statimage, 600+extraImage, 20+(usedStats*textHeight), (statimage.width/statimage.height)*textHeight, textHeight);
                //bgctx.rect(610+extraImage, 80+(parseInt(index)*textHeight), (statimage.width/statimage.height)*textHeight, textHeight);
                //bgctx.stroke();
                usedStats += 1;
            }
        }
        times.push(Date.now())

        bgctx.fillStyle = '#FFFFFF';

        bgctx.fillRect(610, 20+(usedStats*textHeight)+10, 580-10, 2);

        bgctx.strokeStyle = '#FFFFFF';
        drawTextFit(bgctx, "EP: "+efficiencyPointsString, "Calibri", [600, 20+((usedStats)*textHeight)+10+10, width-10, 20+((usedStats+1)*textHeight)+10+10], true, true);

        const encoder = new GifEncoder(width, height)
        const stream = encoder.createReadStream();
        encoder.setQuality(30)
        encoder.setDelay(1000)
        encoder.setRepeat(0)
        encoder.start()
        times.push(Date.now())



        console.log(images["items"])
        for (const [slotKey, slot] of Object.entries(SessionPlayer.build.slots)) {
            ctx.fillStyle = '#FFFFFF';
            ctx.strokeStyle = "#000";
            ctx.drawImage(bgCanvas, 0, 0, width, height);
            drawTextFit(ctx, slot.armor.name, "Calibri", [10, 10, 590, 90], true, false);

            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(10, 110, 580, 2);

            drawTextFit(ctx, "Lvl:"+slot.armorLevel.toString(), "Calibri", [10, 120, 200, 170], false, true);
            drawTextFit(ctx, "EP:"+calculateEfficiencyPoints(slot.getSlotStats(), SessionPlayer.level).toString(), "Calibri", [10, 180, 200, 230], false, true);
            //bgctx.rect(10, 100, 590, 100);
            //bgctx.stroke();
            let usedStats:number = 0;
            for (const [index, [statKey, stat]] of Object.entries(Object.entries(slot.getSlotStats()))) {
                if (stat != 0) {
                    if ("fillColor" in itemStats[statKey]) {
                        ctx.fillStyle = itemStats[statKey]["fillColor"];
                    }
                    if ("strokeColor" in itemStats[statKey] && itemStats[statKey]["strokeColor"] != "#000000") {
                        ctx.strokeStyle = itemStats[statKey]["strokeColor"];
                    } else if ("fillColor" in itemStats[statKey]) {
                        ctx.strokeStyle = itemStats[statKey]["fillColor"];
                    }
                    drawTextFit(ctx, "+ "+(stat).toString(), "Calibri", [210+((60*(usedStats))-((60*(6))*Math.floor(usedStats/6))), 120+(50*Math.floor(usedStats/6)), 210+((60*(usedStats+1))-((60*(6))*Math.floor(usedStats/6))), 170+(50*Math.floor(usedStats/6))], false, false);
                    
                    let statimage = await images["stat"][statKey];
                    let extraImage = (60-((statimage.width/statimage.height)*textHeight))/2;
                    //ctx.drawImage(statimage, 600+extraImage, 20+(usedStats*textHeight), (statimage.width/statimage.height)*textHeight, textHeight);
                    //bgctx.rect(610+extraImage, 80+(parseInt(index)*textHeight), (statimage.width/statimage.height)*textHeight, textHeight);
                    //bgctx.stroke();
                    usedStats += 1;
                }
            }

            times.push(Date.now())
            await drawItemImage(ctx, slot.armor, 75/4, 243, 175, 175);

            await drawItemImage(ctx, slot.enchant, ((75/4)*2)+175, 243, 175, 175);
            await drawItemImage(ctx, slot.modifier, ((75/4)*3)+(175*2), 243, 175, 175);
            times.push(Date.now())

            if (slot.armor.name.toLowerCase() == "none") {
                slot.armor.gemNo = 3;
            }

            for (let [i, gem]of slot.gems.entries()) {
                //ctx.drawImage(await images["items"][gem.id], ((75/4)*(i+1))+(175*i), 630-(75/4)-175, 175, 175);
                await drawItemImage(ctx, gem, ((75/4)*(i+1))+(175*i), 630-(75/4)-175, 175, 175);
            }
            times.push(Date.now())

            encoder.addFrame(ctx);
            times.push(Date.now())
        }
        times.push(Date.now())

        
        encoder.finish()

        
        
        const bufferr = await buffer(stream);

        for (var i = 0; i < times.length; i++) {
            console.log(`time ${i+1}: ${times[i]}`);
        }

        setHeaders({
            'Content-Type': "image/gif"
        });
        const response = new Response(bufferr)
        return response
    } catch (e) {
        console.error(e)
        throw error(500, 'Error')
    }
}) satisfies RequestHandler