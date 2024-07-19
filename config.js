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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348078074747";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_56_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDksXG4gICAgICAgIDMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDIzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQsXG4gICAgICAgIDYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyOSxcbiAgICAgICAgODAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg0LFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMyLFxuICAgICAgICA4OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDEzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjMyLFxuICAgICAgICA4MixcbiAgICAgICAgMjU1LFxuICAgICAgICA3OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMixcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQyLFxuICAgICAgICA3MixcbiAgICAgICAgOTYsXG4gICAgICAgIDEyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMixcbiAgICAgICAgMjAwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM0LFxuICAgICAgICA2NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDMzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODIsXG4gICAgICAgIDY5LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDg2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzksXG4gICAgICAgIDU0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNixcbiAgICAgICAgMTU3LFxuICAgICAgICA2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMixcbiAgICAgICAgNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTYxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAzMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDksXG4gICAgICAgIDgxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtN2FaUGx0aXBGb29LaVE2K1c0WnMrVkxzMTlyZEpZRndjbWNFRlRyYU8wPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0SmhVeEQ2V1RaeVBYcnloUkQydXJRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNkM2I3MmUwLTBiNzctNGVjZi04M2UzLWM5YTZmOWM2ZDAxYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NCxcbiAgICAgIDI0MCxcbiAgICAgIDE0NCxcbiAgICAgIDE3LFxuICAgICAgMTc2LFxuICAgICAgMTA4LFxuICAgICAgNTAsXG4gICAgICA3MSxcbiAgICAgIDIzNyxcbiAgICAgIDE4MSxcbiAgICAgIDcwLFxuICAgICAgNzMsXG4gICAgICAxNDQsXG4gICAgICA4LFxuICAgICAgMTQ1LFxuICAgICAgMTkwLFxuICAgICAgMTc5LFxuICAgICAgMTIyLFxuICAgICAgNTIsXG4gICAgICAxNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNSxcbiAgICAgIDE2MCxcbiAgICAgIDIwNCxcbiAgICAgIDIyOSxcbiAgICAgIDkyLFxuICAgICAgMjM1LFxuICAgICAgNDIsXG4gICAgICA2MixcbiAgICAgIDI0OSxcbiAgICAgIDUzLFxuICAgICAgMTUxLFxuICAgICAgMTAyLFxuICAgICAgMjM4LFxuICAgICAgMjEyLFxuICAgICAgMTMwLFxuICAgICAgMTI5LFxuICAgICAgMTAsXG4gICAgICAxMTAsXG4gICAgICA5LFxuICAgICAgOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJckR0dDhQRU43UjZyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImhueG53bGRaTTdRZ2R0bXZaT0dDc3I4NUJVUUhnVkFwdTllWnNYb2cwVFk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwia3FBU0VGRTZ4Unp2VHl2YmxuOWNQUlF3MlVzVTY2eG9XSmVDdGgwWjN1aHRvTHhxUkx4MTh1Nk02dWovUUE5L3NoOUdwOEF5c0ZyL2dRUGlZRWpMaFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTXlWRitvbnVyTjR4NzRpOGcyanlMMG0yOWxvaUlNQU9xNmJQVWJSVW41ZWMrWGd0cWhma2l4QTlSSlhLZjNhaDJUK3B0Y1dHZUwyazR1aEg1dFZ4aWc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDc4MDc0NzQ3OjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QgvCdmqrwnZqr8J2asPCdkIbvo79cIixcbiAgICBcImxpZFwiOiBcIjIzOTk3Mjg0MTk1NTQ1OTozMkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNzgwNzQ3NDc6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNDExODA5XG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
