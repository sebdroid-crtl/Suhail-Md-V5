const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254768350096";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "254768350096";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,254768350096";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_45_11_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MixcbiAgICAgICAgNjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDc4LFxuICAgICAgICA1NixcbiAgICAgICAgMTQzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDkzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTk2LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyLFxuICAgICAgICAzNSxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAxLFxuICAgICAgICA1OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDg3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjEsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk3LFxuICAgICAgICAyNixcbiAgICAgICAgNDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDc5LFxuICAgICAgICA5MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA1LFxuICAgICAgICAxNDksXG4gICAgICAgIDI3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA2NixcbiAgICAgICAgMTUwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODEsXG4gICAgICAgIDMyLFxuICAgICAgICA4NixcbiAgICAgICAgNzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NyxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzQsXG4gICAgICAgIDc5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDcyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjExLFxuICAgICAgICA0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjAwLFxuICAgICAgICA5MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNixcbiAgICAgICAgOTksXG4gICAgICAgIDkzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NCxcbiAgICAgICAgODgsXG4gICAgICAgIDMwLFxuICAgICAgICAxODYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTExLFxuICAgICAgICA0MCxcbiAgICAgICAgODIsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIitJWDBwZkhjRUZ5OGJZK0VtN0ttMXhXWkZFZTBjbW0rQVNzRTFhQ0N5MVU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzY4MzUwMDk2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBMzhGQzFFMEE3MEU3NUNDNEJGNzJFM0FFMDVFRUNCQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzEwOTg3NDdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiN2tsU0kxQ0FTUmVvOUxvQlI5Qk1kZ1wiLFxuICBcInBob25lSWRcIjogXCI0ZjMwNGNjMi0yZWFjLTRhY2QtODZmMi03ZDg3MGY3NTgwMWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzUsXG4gICAgICAxMDEsXG4gICAgICA2NCxcbiAgICAgIDIyMSxcbiAgICAgIDIzNyxcbiAgICAgIDE4NyxcbiAgICAgIDE1NSxcbiAgICAgIDI3LFxuICAgICAgMTA1LFxuICAgICAgNDgsXG4gICAgICAxNTYsXG4gICAgICAyMzUsXG4gICAgICAxNjcsXG4gICAgICA1NSxcbiAgICAgIDEwNCxcbiAgICAgIDE4NixcbiAgICAgIDg5LFxuICAgICAgMTk5LFxuICAgICAgMjMsXG4gICAgICAyMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAxLFxuICAgICAgMTM5LFxuICAgICAgMjAzLFxuICAgICAgMTAyLFxuICAgICAgMTUwLFxuICAgICAgODYsXG4gICAgICAxMzUsXG4gICAgICAxNTcsXG4gICAgICAxOTQsXG4gICAgICAyMTQsXG4gICAgICA0OCxcbiAgICAgIDIwOCxcbiAgICAgIDQ5LFxuICAgICAgMTk2LFxuICAgICAgMTI1LFxuICAgICAgOTYsXG4gICAgICAxMjIsXG4gICAgICAxMjUsXG4gICAgICAxMDUsXG4gICAgICAxNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNjc2SlJUSDJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc2ODM1MDA5NjozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNlYnZmMVwiLFxuICAgIFwibGlkXCI6IFwiNjE3NjYxOTMxMzE3MDQ6MzJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTk81ektBRUVQVHd1YmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0TDZGbDF6SE1SVXJNYmpidGkwVkd0R013aXdZZ1BQeW9nT3VQSzZXZ1FzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInIvb2dmUEhnWXlBQURjSzZLdWdSMktNVnhPZUhIdUdBeExKc1FzRTg5bWNja2tyTXIzZk1IQStxZVZSc3EyeWxtRGsrSnJNTGRZNFhwRHpMZUltREJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInlJcjdGTjIycTBhRVArTlRTR1k1M1hTRGNjWWhRc2ZZd0JabkpoVGV3b0p3VlNPSnNaQ25VOG5TUGNKSjF6b0I4T211Zmw1bDlqcTh6Q3QvR29EV2h3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc2ODM1MDA5NjozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEwOTg3NDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKb3NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpvcy5qc29uIjogIntcImtleURhdGFcIjpcImI0SHR1YTNGazJxYk13MkZwaTd6enRtTzFOaTJMZEFCYjc0dnhWVlJqWlE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE0MjEwMzI1MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMxMDk4NzQ2OTQxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Sebvf1",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
