const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348105221368";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_52_11_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MixcbiAgICAgICAgODYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDUzLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc4LFxuICAgICAgICA1NSxcbiAgICAgICAgODksXG4gICAgICAgIDI2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODcsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjksXG4gICAgICAgIDg3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNSxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTksXG4gICAgICAgIDQxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxODMsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA0MixcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAwLFxuICAgICAgICA5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUsXG4gICAgICAgIDM3LFxuICAgICAgICA1NixcbiAgICAgICAgMzcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTk3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1NCxcbiAgICAgICAgODMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2NyxcbiAgICAgICAgODEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgOTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzgsXG4gICAgICAgIDIxLFxuICAgICAgICA2OCxcbiAgICAgICAgNSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjksXG4gICAgICAgIDk3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM5LFxuICAgICAgICA0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDQxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDY1LFxuICAgICAgICA3MSxcbiAgICAgICAgODAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjYsXG4gICAgICAgIDMwLFxuICAgICAgICAxODEsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjksXG4gICAgICAgIDEwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgODMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjhEL2FXN1JjWHNFZnp1QXFna3pmRU1YaHNOVStiZm80Zm95bG85Yk4vd1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIll1RTA0WTNWUTl1c0kyX0xtS0dlLWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGU1MDQwMmYtZTFmYS00MjRhLWEyOGItYTRmNGY0ZTY3MjI0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMSxcbiAgICAgIDE5LFxuICAgICAgMTkxLFxuICAgICAgNjEsXG4gICAgICAxOTAsXG4gICAgICAxODUsXG4gICAgICAxNTgsXG4gICAgICAxMzcsXG4gICAgICAxOTcsXG4gICAgICAyMDAsXG4gICAgICAyMjAsXG4gICAgICAxODUsXG4gICAgICA1NixcbiAgICAgIDAsXG4gICAgICA5LFxuICAgICAgNjYsXG4gICAgICAyMjgsXG4gICAgICAxMzcsXG4gICAgICAyNTMsXG4gICAgICAxMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ4LFxuICAgICAgNTMsXG4gICAgICAyMzksXG4gICAgICAxMTUsXG4gICAgICAxODEsXG4gICAgICAxOTUsXG4gICAgICAyMTksXG4gICAgICA3NixcbiAgICAgIDE5LFxuICAgICAgMTE0LFxuICAgICAgMTI5LFxuICAgICAgOTQsXG4gICAgICA5LFxuICAgICAgNjQsXG4gICAgICA1OSxcbiAgICAgIDcyLFxuICAgICAgMTQ1LFxuICAgICAgMTc5LFxuICAgICAgMjA0LFxuICAgICAgODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS0daNUZNSldcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDUyMjEzNjg6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2NTkxODk1NzUyMzEzNjoxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJVGxvTElHRUtESjlMa0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi8rNTJTc3crU05tR0F2S1lYTjBaU2ZGbkRsb1JrblkzOHBsUkgzaTFqems9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUkUwWk9hRGdNRG5SWGw5V0E2RjRvc2t6cG5GbWJvWUNySTNCVTlWdkVmNnJwUWYyN1MzSWVsOFdWWGxkVFA0RUEya0dYS084bTJqemFWNnFldGZvQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQllhRDkvbXFKejI4R3c4Yy9uTmZGcjBzNGhvN0dtbGRYaU5mYzdaVjNzWGx0UDVKRUUrYU9hOFhnOHlBQXVUODk4eG5oR0JVZWJ2c0FtRGY5NmtQREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwNTIyMTM2ODoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjA2MDMyNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJrWFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQmtYLmpzb24iOiAie1wia2V5RGF0YVwiOlwieVlNZ0JTS0c1NlkzbmZxOTRMOFNjcHJtbVZJMmlXQ3dGS1RvMWlMRlZGRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzE2MDA3NTU2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzIwNjAzMjk2NDVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
