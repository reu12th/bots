const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="reu12th@gmail.com"
global.location="Lagos,Nigeria."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://reu12th:70MdPF6sgyr09FDB@reu12th.24zvdy2.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://wa.link/xb2qzt";
global.website=process.env.GURL || "https://wa.link/xb2qzt" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://www.journaldugeek.com/app/uploads/2021/12/template-jdg-96-2.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "2348145461867" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348145461867";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "$",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©𝔰𝔱𝔢𝔦𝔫 - 𝔪𝔡" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

  author : process.env.PACK_AUTHER|| "rubestein.vercel.app",
  packname: process.env.PACK_NAME || "𝔰𝔱𝔢𝔦𝔫 - 𝔪𝔡",
  botname : process.env.BOT_NAME  || "𝔰𝔱𝔢𝔦𝔫 - 𝔪𝔡",
  ownername:process.env.OWNER_NAME|| "𝔰𝔱𝔢𝔦𝔫",

  sessionName:process.env.SESSION_ID || "SUHAIL_19_00_03_04_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiOEhUR1drOGc2anN1YmZiMWNUMDlWOTNTYW9xWEErU2hyZUZqU09FQWcxZz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlgxaG9KblMvblNSeGtSZ0dWRXVXdWtQNHA3SXFiRDByV2I5bGtEbDdHMDQ9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMkV0TVV5Qnp3OHR1cURUNDY3NksxQ3p3MUNHRGlPUnFNNTBuRm1vTlpIWT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlRZL013c2lkZTRia3V5cGJ6L0lwWXMxQ2NVVlhLb1dza3hYWERwa25IUWs9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwib1B5OHJHZ3h0aGx6NDBPTkRVNEl1bGY5WnNCWjFrWmlkVzNheEtRUWlsWT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImJrd1l3Q2VrV1hJK0dKRnkwUFdSeWVxZTdIRk9lbExuZW83QW9udXMwMWs9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJtRlFPNW13T05WRnd5Z2JGOC9INzhBbkRyaGZKOFR1anlBdHpXVEF4ZVVJPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMzFSQU04UDc0NlZ2WUF3SjNRaXgwek5OcitDSXV3cDhOZ3hxclFMbHVYTT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ2bkZFdjhFT1ltSG9WblhoeGVSV2tXK0l5aFgvRGZzVlNXTmJpZzhVeE1LM29Ic0F2YUJkNEVjN25jU2tLUENTcHY1ZW9jM0V5Yy81bmFXaVJoaUpoZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTI2LFwiYWR2U2VjcmV0S2V5XCI6XCI0Q1V4VXoraldET1hFcW51OVRYcmpEZWlJdWlUaVAzMldtdWV4UFlaSzZZPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjM0ODE0NTQ2MTg2N0BzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCJFNEM4ODhCNjIzRDJCNUFFNEY2NTkzMkQ5MDc0QUYxQ1wifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzA5NTc4ODMxfV0sXCJuZXh0UHJlS2V5SWRcIjo2MSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6NjEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiSHZkQkhHQzBTYWF2T1JWQUl2bmJLd1wiLFwicGhvbmVJZFwiOlwiZGIzODI4NjItODdhOC00ZTkwLWI4ZjEtZTIxMTFhNWQyMGFhXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJjd1p1NkFHcWt1Qmtkc0gyVHkzN0orTFBHVkk9XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlgvUER6UVFWbUJoaVVVbHFpSnV0VEtjWTRUOD1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDTWoxaS9vSEVNaTBtSzhHR0FNZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIkhuQnNqbGRDeElqWGlTYkUxdDd5dGtZOGVBVzZ6dDdpdUlURjdvOTRyaTg9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCI5MlhyMWpMMzhDMUdnVC9zcllLVlRLQmtkdXBUVlErbzJ2SFllaWJmRTIyNmljNTVVRlhtTXA2NEtSd2h4dHE4eHNsYjFnSHhMUTRiaTZKRG4vM1dDZz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIndPeEo0cml0TURGZ3J2VDdObnBCRHh1NU56ZWdsdUZBam8vSDc0Z0VPUXo5STE2OVREdXZQdCtzWmhOejlUTSsxM2gxVXNzWWV6QzV5Z1psTFFqQWl3PT1cIn0sXCJtZVwiOntcImlkXCI6XCIyMzQ4MTQ1NDYxODY3OjZAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiNTQ1NzIwMDU0OTkwNzY6NkBsaWRcIixcIm5hbWVcIjpcIvCdlpfwnZaK8J2WmvCdlofwnZaK8J2Wk1wifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjIzNDgxNDU0NjE4Njc6NkBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJSNXdiSTVYUXNTSTE0a214TmJlOHJaR1BIZ0Z1czdlNHJpRXhlNlBlSzR2XCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcwOTU3ODgyOCxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFMcDVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMcDUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJLcHI3a0k5aWhVR1pGOXovTWFYcFI2T2V4anNuaTNpM3hRU2djS3lIcHRnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMzUwOTYwMDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcwOTUzNDMzMTU4OFwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "e86BtygJoRU8M5H6GP8CQ2AC",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "16d5fea3ec974a94db8fa6b173eb81a2",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "GOJO SATURO",



};




























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

