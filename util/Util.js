exports.canModifyQueue = (member) => member.voice.channelID === member.guild.voice.channelID;

let config;

try {
  config = require("../config.json");
} catch (error) {
  config = null;
}

exports.TOKEN = config ? config.TOKEN : process.env.TOKEN ||"OTA1MTk2Nzc3MjI4MDk1NDk4.YYGkMQ.gGG8DVBGFrFFnuZ5h85R4Q-lnOY";
exports.YOUTUBE_API_KEY = config ? config.YOUTUBE_API_KEY : process.env.YOUTUBE_API_KEY || "AIzaSyCcUPtoXWl253K93tvBa2YsAgUOT-5e-t8";
exports.SOUNDCLOUD_CLIENT_ID = config ? config.SOUNDCLOUD_CLIENT_ID : process.env.SOUNDCLOUD_CLIENT_ID;
exports.PREFIX = (config ? config.PREFIX : process.env.PREFIX) || "/";
exports.MAX_PLAYLIST_SIZE = (config ? config.MAX_PLAYLIST_SIZE : parseInt(process.env.MAX_PLAYLIST_SIZE)) || 9999;
exports.PRUNING = (config ? config.PRUNING : (process.env.PRUNING === 'true' ? true : false));
exports.STAY_TIME = (config ? config.STAY_TIME : parseInt(process.env.STAY_TIME)) || 30;
exports.DEFAULT_VOLUME = (config ? config.DEFAULT_VOLUME : parseInt(process.env.DEFAULT_VOLUME)) || 100;
exports.LOCALE = (config ? config.LOCALE : process.env.LOCALE) || "en";
