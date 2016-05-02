if("undefined"==typeof MIDI&&(MIDI={}),function(e){"use strict";var n={},t=0,r=function(e){t++;var r=document.body,o=new Audio,i=e.split(";")[0];o.id="audio",o.setAttribute("preload","auto"),o.setAttribute("audiobuffer",!0),o.addEventListener("error",function(){r.removeChild(o),n[i]=!1,t--},!1),o.addEventListener("canplaythrough",function(){r.removeChild(o),n[i]=!0,t--},!1),o.src="data:"+e,r.appendChild(o)};e.audioDetect=function(e){if(navigator.requestMIDIAccess){var o=Function.prototype.toString.call(navigator.requestMIDIAccess).indexOf("[native code]");if(o)n.webmidi=!0;else for(var i=0;navigator.plugins.length>i;i++){var a=navigator.plugins[i];a.name.indexOf("Jazz-Plugin")>=0&&(n.webmidi=!0)}}if("undefined"==typeof Audio)return e({});n.audiotag=!0,(window.AudioContext||window.webkitAudioContext)&&(n.webaudio=!0);var u=new Audio;if(u.canPlayType===void 0)return e(n);var s=u.canPlayType('audio/ogg; codecs="vorbis"');s="probably"===s||"maybe"===s;var c=u.canPlayType("audio/mpeg");if(c="probably"===c||"maybe"===c,!s&&!c)return e(n),void 0;s&&r("audio/ogg;base64,T2dnUwACAAAAAAAAAADqnjMlAAAAAOyyzPIBHgF2b3JiaXMAAAAAAUAfAABAHwAAQB8AAEAfAACZAU9nZ1MAAAAAAAAAAAAA6p4zJQEAAAANJGeqCj3//////////5ADdm9yYmlzLQAAAFhpcGguT3JnIGxpYlZvcmJpcyBJIDIwMTAxMTAxIChTY2hhdWZlbnVnZ2V0KQAAAAABBXZvcmJpcw9CQ1YBAAABAAxSFCElGVNKYwiVUlIpBR1jUFtHHWPUOUYhZBBTiEkZpXtPKpVYSsgRUlgpRR1TTFNJlVKWKUUdYxRTSCFT1jFloXMUS4ZJCSVsTa50FkvomWOWMUYdY85aSp1j1jFFHWNSUkmhcxg6ZiVkFDpGxehifDA6laJCKL7H3lLpLYWKW4q91xpT6y2EGEtpwQhhc+211dxKasUYY4wxxsXiUyiC0JBVAAABAABABAFCQ1YBAAoAAMJQDEVRgNCQVQBABgCAABRFcRTHcRxHkiTLAkJDVgEAQAAAAgAAKI7hKJIjSZJkWZZlWZameZaouaov+64u667t6roOhIasBACAAAAYRqF1TCqDEEPKQ4QUY9AzoxBDDEzGHGNONKQMMogzxZAyiFssLqgQBKEhKwKAKAAAwBjEGGIMOeekZFIi55iUTkoDnaPUUcoolRRLjBmlEluJMYLOUeooZZRCjKXFjFKJscRUAABAgAMAQICFUGjIigAgCgCAMAYphZRCjCnmFHOIMeUcgwwxxiBkzinoGJNOSuWck85JiRhjzjEHlXNOSuekctBJyaQTAAAQ4AAAEGAhFBqyIgCIEwAwSJKmWZomipamiaJniqrqiaKqWp5nmp5pqqpnmqpqqqrrmqrqypbnmaZnmqrqmaaqiqbquqaquq6nqrZsuqoum65q267s+rZru77uqapsm6or66bqyrrqyrbuurbtS56nqqKquq5nqq6ruq5uq65r25pqyq6purJtuq4tu7Js664s67pmqq5suqotm64s667s2rYqy7ovuq5uq7Ks+6os+75s67ru2rrwi65r66os674qy74x27bwy7ouHJMnqqqnqq7rmarrqq5r26rr2rqmmq5suq4tm6or26os67Yry7aumaosm64r26bryrIqy77vyrJui67r66Ys67oqy8Lu6roxzLat+6Lr6roqy7qvyrKuu7ru+7JuC7umqrpuyrKvm7Ks+7auC8us27oxuq7vq7It/KosC7+u+8Iy6z5jdF1fV21ZGFbZ9n3d95Vj1nVhWW1b+V1bZ7y+bgy7bvzKrQvLstq2scy6rSyvrxvDLux8W/iVmqratum6um7Ksq/Lui60dd1XRtf1fdW2fV+VZd+3hV9pG8OwjK6r+6os68Jry8ov67qw7MIvLKttK7+r68ow27qw3L6wLL/uC8uq277v6rrStXVluX2fsSu38QsAABhwAAAIMKEMFBqyIgCIEwBAEHIOKQahYgpCCKGkEEIqFWNSMuakZM5JKaWUFEpJrWJMSuaclMwxKaGUlkopqYRSWiqlxBRKaS2l1mJKqcVQSmulpNZKSa2llGJMrcUYMSYlc05K5pyUklJrJZXWMucoZQ5K6iCklEoqraTUYuacpA46Kx2E1EoqMZWUYgupxFZKaq2kFGMrMdXUWo4hpRhLSrGVlFptMdXWWqs1YkxK5pyUzDkqJaXWSiqtZc5J6iC01DkoqaTUYiopxco5SR2ElDLIqJSUWiupxBJSia20FGMpqcXUYq4pxRZDSS2WlFosqcTWYoy1tVRTJ6XFklKMJZUYW6y5ttZqDKXEVkqLsaSUW2sx1xZjjqGkFksrsZWUWmy15dhayzW1VGNKrdYWY40x5ZRrrT2n1mJNMdXaWqy51ZZbzLXnTkprpZQWS0oxttZijTHmHEppraQUWykpxtZara3FXEMpsZXSWiypxNhirLXFVmNqrcYWW62ltVprrb3GVlsurdXcYqw9tZRrrLXmWFNtBQAADDgAAASYUAYKDVkJAEQBAADGMMYYhEYpx5yT0ijlnHNSKucghJBS5hyEEFLKnINQSkuZcxBKSSmUklJqrYVSUmqttQIAAAocAAACbNCUWByg0JCVAEAqAIDBcTRNFFXVdX1fsSxRVFXXlW3jVyxNFFVVdm1b+DVRVFXXtW3bFn5NFFVVdmXZtoWiqrqybduybgvDqKqua9uybeuorqvbuq3bui9UXVmWbVu3dR3XtnXd9nVd+Bmzbeu2buu+8CMMR9/4IeTj+3RCCAAAT3AAACqwYXWEk6KxwEJDVgIAGQAAgDFKGYUYM0gxphhjTDHGmAAAgAEHAIAAE8pAoSErAoAoAADAOeecc84555xzzjnnnHPOOeecc44xxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY0wAwE6EA8BOhIVQaMhKACAcAABACCEpKaWUUkoRU85BSSmllFKqFIOMSkoppZRSpBR1lFJKKaWUIqWgpJJSSimllElJKaWUUkoppYw6SimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaVUSimllFJKKaWUUkoppRQAYPLgAACVYOMMK0lnhaPBhYasBAByAwAAhRiDEEJpraRUUkolVc5BKCWUlEpKKZWUUqqYgxBKKqmlklJKKbXSQSihlFBKKSWUUkooJYQQSgmhlFRCK6mEUkoHoYQSQimhhFRKKSWUzkEoIYUOQkmllNRCSB10VFIpIZVSSiklpZQ6CKGUklJLLZVSWkqpdBJSKamV1FJqqbWSUgmhpFZKSSWl0lpJJbUSSkklpZRSSymFVFJJJYSSUioltZZaSqm11lJIqZWUUkqppdRSSiWlkEpKqZSSUmollZRSaiGVlEpJKaTUSimlpFRCSamlUlpKLbWUSkmptFRSSaWUlEpJKaVSSksppRJKSqmllFpJKYWSUkoplZJSSyW1VEoKJaWUUkmptJRSSymVklIBAEAHDgAAAUZUWoidZlx5BI4oZJiAAgAAQABAgAkgMEBQMApBgDACAQAAAADAAAAfAABHARAR0ZzBAUKCwgJDg8MDAAAAAAAAAAAAAACAT2dnUwAEAAAAAAAAAADqnjMlAgAAADzQPmcBAQA="),c&&r("audio/mpeg;base64,/+MYxAAAAANIAUAAAASEEB/jwOFM/0MM/90b/+RhST//w4NFwOjf///PZu////9lns5GFDv//l9GlUIEEIAAAgIg8Ir/JGq3/+MYxDsLIj5QMYcoAP0dv9HIjUcH//yYSg+CIbkGP//8w0bLVjUP///3Z0x5QCAv/yLjwtGKTEFNRTMuOTeqqqqqqqqqqqqq/+MYxEkNmdJkUYc4AKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");var l=(new Date).getTime(),d=window.setInterval(function(){var r=(new Date).getTime(),o=r-l>5e3;(!t||o)&&(window.clearInterval(d),e(n))},1)}}(MIDI),function(e){"use strict";e.GM=function(e){var n=function(e){return e.replace(/[^a-z0-9 ]/gi,"").replace(/[ ]/g,"_").toLowerCase()},t={byName:{},byId:{},byCategory:{}};for(var r in e)for(var o=e[r],i=0,a=o.length;a>i;i++){var u=o[i];if(u){var s=parseInt(u.substr(0,u.indexOf(" ")),10);u=u.replace(s+" ",""),t.byId[--s]=t.byName[n(u)]=t.byCategory[n(r)]={id:n(u),instrument:u,number:s,category:r}}}return t}({Piano:["1 Acoustic Grand Piano","2 Bright Acoustic Piano","3 Electric Grand Piano","4 Honky-tonk Piano","5 Electric Piano 1","6 Electric Piano 2","7 Harpsichord","8 Clavinet"],"Chromatic Percussion":["9 Celesta","10 Glockenspiel","11 Music Box","12 Vibraphone","13 Marimba","14 Xylophone","15 Tubular Bells","16 Dulcimer"],Organ:["17 Drawbar Organ","18 Percussive Organ","19 Rock Organ","20 Church Organ","21 Reed Organ","22 Accordion","23 Harmonica","24 Tango Accordion"],Guitar:["25 Acoustic Guitar (nylon)","26 Acoustic Guitar (steel)","27 Electric Guitar (jazz)","28 Electric Guitar (clean)","29 Electric Guitar (muted)","30 Overdriven Guitar","31 Distortion Guitar","32 Guitar Harmonics"],Bass:["33 Acoustic Bass","34 Electric Bass (finger)","35 Electric Bass (pick)","36 Fretless Bass","37 Slap Bass 1","38 Slap Bass 2","39 Synth Bass 1","40 Synth Bass 2"],Strings:["41 Violin","42 Viola","43 Cello","44 Contrabass","45 Tremolo Strings","46 Pizzicato Strings","47 Orchestral Harp","48 Timpani"],Ensemble:["49 String Ensemble 1","50 String Ensemble 2","51 Synth Strings 1","52 Synth Strings 2","53 Choir Aahs","54 Voice Oohs","55 Synth Choir","56 Orchestra Hit"],Brass:["57 Trumpet","58 Trombone","59 Tuba","60 Muted Trumpet","61 French Horn","62 Brass Section","63 Synth Brass 1","64 Synth Brass 2"],Reed:["65 Soprano Sax","66 Alto Sax","67 Tenor Sax","68 Baritone Sax","69 Oboe","70 English Horn","71 Bassoon","72 Clarinet"],Pipe:["73 Piccolo","74 Flute","75 Recorder","76 Pan Flute","77 Blown Bottle","78 Shakuhachi","79 Whistle","80 Ocarina"],"Synth Lead":["81 Lead 1 (square)","82 Lead 2 (sawtooth)","83 Lead 3 (calliope)","84 Lead 4 (chiff)","85 Lead 5 (charang)","86 Lead 6 (voice)","87 Lead 7 (fifths)","88 Lead 8 (bass + lead)"],"Synth Pad":["89 Pad 1 (new age)","90 Pad 2 (warm)","91 Pad 3 (polysynth)","92 Pad 4 (choir)","93 Pad 5 (bowed)","94 Pad 6 (metallic)","95 Pad 7 (halo)","96 Pad 8 (sweep)"],"Synth Effects":["97 FX 1 (rain)","98 FX 2 (soundtrack)","99 FX 3 (crystal)","100 FX 4 (atmosphere)","101 FX 5 (brightness)","102 FX 6 (goblins)","103 FX 7 (echoes)","104 FX 8 (sci-fi)"],Ethnic:["105 Sitar","106 Banjo","107 Shamisen","108 Koto","109 Kalimba","110 Bagpipe","111 Fiddle","112 Shanai"],Percussive:["113 Tinkle Bell","114 Agogo","115 Steel Drums","116 Woodblock","117 Taiko Drum","118 Melodic Tom","119 Synth Drum"],"Sound effects":["120 Reverse Cymbal","121 Guitar Fret Noise","122 Breath Noise","123 Seashore","124 Bird Tweet","125 Telephone Ring","126 Helicopter","127 Applause","128 Gunshot"]}),e.getInstrument=function(n){var t=e.channels[n];return t&&t.instrument},e.setInstrument=function(n,t,r){var o=e.channels[n];return r?setTimeout(function(){o.instrument=t},r):(o.instrument=t,void 0)},e.getMono=function(n){var t=e.channels[n];return t&&t.mono},e.setMono=function(n,t,r){var o=e.channels[n];return r?setTimeout(function(){o.mono=t},r):(o.mono=t,void 0)},e.getOmni=function(n){var t=e.channels[n];return t&&t.omni},e.setOmni=function(n,t){var r=e.channels[n];return delay?setTimeout(function(){r.omni=t},delay):(r.omni=t,void 0)},e.getSolo=function(n){var t=e.channels[n];return t&&t.solo},e.setSolo=function(n,t){var r=e.channels[n];return delay?setTimeout(function(){r.solo=t},delay):(r.solo=t,void 0)},e.channels=function(){for(var e={},n=0;16>n;n++)e[n]={instrument:n,pitchBend:0,mute:!1,mono:!1,omni:!1,solo:!1};return e}(),e.keyToNote={},e.noteToKey={},function(){for(var n=21,t=108,r=["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"],o=n;t>=o;o++){var i=(o-12)/12>>0,a=r[o%12]+i;e.keyToNote[a]=o,e.noteToKey[o]=a}}()}(MIDI),"undefined"==typeof MIDI&&(MIDI={}),MIDI.Soundfont=MIDI.Soundfont||{},MIDI.Player=MIDI.Player||{},function(e){"use strict";e.DEBUG=!0,e.USE_XHR=!0,e.soundfontUrl="./soundfont/",e.loadPlugin=function(t){"function"==typeof t&&(t={onsuccess:t}),e.soundfontUrl=t.soundfontUrl||e.soundfontUrl,e.audioDetect(function(r){var o=window.location.hash,i="";if(r[t.api]?i=t.api:r[o.substr(1)]?i=o.substr(1):r.webmidi?i="webmidi":window.AudioContext?i="webaudio":window.Audio&&(i="audiotag"),n[i]){if(t.targetFormat)var a=t.targetFormat;else var a=r["audio/ogg"]?"ogg":"mp3";e.__api=i,e.__audioFormat=a,e.supports=r,e.loadResource(t)}})},e.loadResource=function(t){var r=t.instruments||t.instrument||"acoustic_grand_piano";"object"!=typeof r&&(r=r||0===r?[r]:[]);for(var o=0;r.length>o;o++){var i=r[o];i===+i&&e.GM.byId[i]&&(r[o]=e.GM.byId[i].id)}t.format=e.__audioFormat,t.instruments=r,n[e.__api](t)};var n={webmidi:function(n){e.WebMIDI.connect(n)},audiotag:function(e){t(e,"AudioTag")},webaudio:function(e){t(e,"WebAudio")}},t=function(n,t){for(var o=n.format,i=n.instruments,a=n.onprogress,u=n.onerror,s=i.length,c=s,l=function(){--c||(a&&a("load",1),e[t].connect(n))},d=0;s>d;d++){var f=i[d];MIDI.Soundfont[f]?l():r(i[d],o,function(e,n){var t=n/s,r=(s-c)/s;a&&a("load",t+r,f)},function(){l()},u)}},r=function(n,t,r,o,i){var a=e.soundfontUrl+n+"-"+t+".js";e.USE_XHR?e.util.request({url:a,format:"text",onerror:i,onprogress:r,onsuccess:function(e,n){var t=document.createElement("script");t.language="javascript",t.type="text/javascript",t.text=n,document.body.appendChild(t),o()}}):dom.loadScript.add({url:a,verify:'MIDI.Soundfont["'+n+'"]',onerror:i,onsuccess:function(){o()}})};e.setDefaultPlugin=function(n){for(var t in n)e[t]=n[t]}}(MIDI),"undefined"==typeof MIDI&&(MIDI={}),MIDI.Player===void 0&&(MIDI.Player={}),function(){"use strict";var e=MIDI.Player;e.currentTime=0,e.endTime=0,e.restart=0,e.playing=!1,e.timeWarp=1,e.startDelay=0,e.BPM=120,e.start=e.resume=function(n){-1>e.currentTime&&(e.currentTime=-1),d(e.currentTime,null,n)},e.pause=function(){var n=e.restart;f(),e.restart=n},e.stop=function(){f(),e.restart=0,e.currentTime=0},e.addListener=function(e){a=e},e.removeListener=function(){a=void 0},e.clearAnimation=function(){e.animationFrameId&&cancelAnimationFrame(e.animationFrameId)},e.setAnimation=function(n){var t=0,r=0,o=0;e.clearAnimation();var a=function(){if(e.animationFrameId=requestAnimationFrame(a),0!==e.endTime){e.playing?(t=o===e.currentTime?r-Date.now():0,t=0===e.currentTime?0:e.currentTime-t,o!==e.currentTime&&(r=Date.now(),o=e.currentTime)):t=e.currentTime;var u=e.endTime,s=t/1e3,c=s/60,l=s-60*c,d=60*c+l,f=u/1e3;-1>f-d||n({now:d,end:f,events:i})}};requestAnimationFrame(a)},e.loadMidiFile=function(n,t,r){try{e.replayer=new Replayer(MidiFile(e.currentData),e.timeWarp,null,e.BPM),e.data=e.replayer.getData(),e.endTime=c(),MIDI.loadPlugin({onsuccess:n,onprogress:t,onerror:r})}catch(o){r&&r(o)}},e.loadFile=function(n,t,r,o){if(e.stop(),-1!==n.indexOf("base64,")){var i=window.atob(n.split(",")[1]);e.currentData=i,e.loadMidiFile(t,r,o)}else{var a=new XMLHttpRequest;a.open("GET",n),a.overrideMimeType("text/plain; charset=x-user-defined"),a.onreadystatechange=function(){if(4===this.readyState)if(200===this.status){for(var n=this.responseText||"",i=[],a=n.length,u=String.fromCharCode,s=0;a>s;s++)i[s]=u(255&n.charCodeAt(s));var c=i.join("");e.currentData=c,e.loadMidiFile(t,r,o)}else o&&o("Unable to load MIDI file")},a.send()}},e.getFileInstruments=function(){for(var n={},t={},r=0;e.data.length>r;r++){var o=e.data[r][0].event;if("channel"===o.type){var i=o.channel;switch(o.subtype){case"controller":break;case"programChange":t[i]=o.programNumber;break;case"noteOn":var a=t[i],u=MIDI.GM.byId[isFinite(a)?a:i];n[u.id]=!0}}}var s=[];for(var c in n)s.push(c);return s};var n,t,r=[],o=0,i={},a=void 0,u=function(t,o,u,s,c,l){return setTimeout(function(){var s={channel:t,note:o,now:u,end:e.endTime,message:c,velocity:l};128===c?delete i[o]:i[o]=s,a&&a(s),e.currentTime=u,r.shift(),1e3>r.length?d(n,!0):e.currentTime===n&&e.endTime>n&&d(n,!0)},u-s)},s=function(){return"webaudio"===MIDI.api?MIDI.WebAudio.getContext():(e.ctx={currentTime:0},e.ctx)},c=function(){for(var n=e.data,t=n.length,r=.5,o=0;t>o;o++)r+=n[o][1];return r},l=function(){return window.performance&&window.performance.now?window.performance.now():Date.now()},d=function(i,a,d){if(e.replayer){a||(i===void 0&&(i=e.restart),e.playing&&f(),e.playing=!0,e.data=e.replayer.getData(),e.endTime=c());var p,A=0,m=0,v=e.data,q=s(),g=v.length;n=.5,r[0]&&r[0].interval||0;var h=i-e.currentTime;if("webaudio"!==MIDI.api){var y=l();t=t||y,q.currentTime=(y-t)/1e3}o=q.currentTime;for(var S=0;g>S&&100>m;S++){var I=v[S];if(i>=(n+=I[1]))A=n;else{i=n-A;var b=I[0].event;if("channel"===b.type){var T=b.channel,w=MIDI.channels[T],M=q.currentTime+(i+h+e.startDelay)/1e3,D=n-A+e.startDelay;switch(b.subtype){case"controller":MIDI.setController(T,b.controllerType,b.value,M);break;case"programChange":MIDI.programChange(T,b.programNumber,M);break;case"pitchBend":MIDI.pitchBend(T,b.value,M);break;case"noteOn":if(w.mute)break;p=b.noteNumber-(e.MIDIOffset||0),r.push({event:b,time:D,source:MIDI.noteOn(T,b.noteNumber,b.velocity,M),interval:u(T,p,n+e.startDelay,A-h,144,b.velocity)}),m++;break;case"noteOff":if(w.mute)break;p=b.noteNumber-(e.MIDIOffset||0),r.push({event:b,time:D,source:MIDI.noteOff(T,b.noteNumber,M),interval:u(T,p,n,A-h,128,0)});break;default:}}}}d&&d(r)}},f=function(){var n=s();for(e.playing=!1,e.restart+=1e3*(n.currentTime-o);r.length;){var t=r.pop();window.clearInterval(t.interval),t.source&&("number"==typeof t.source?window.clearTimeout(t.source):t.source.disconnect(0))}for(var u in i){var t=i[u];144===i[u].message&&a&&a({channel:t.channel,note:t.note,now:t.now,end:t.end,message:128,velocity:t.velocity})}i={}}}(),function(e){"use strict";window.Audio&&function(){for(var n=e.AudioTag={api:"audiotag"},t={},r=127,o=-1,i=[],a=[],u={},s=0;12>s;s++)i[s]=new Audio;var c=function(n,t){if(e.channels[n]){var s=e.channels[n].instrument,c=e.GM.byId[s].id,t=u[t];if(t){var l=c+""+t.id,d=(o+1)%i.length,f=i[d];if(a[d]=l,!e.Soundfont[c])return e.DEBUG&&console.log("404",c),void 0;f.src=e.Soundfont[c][t.id],f.volume=r/127,f.play(),o=d}}},l=function(n,t){if(e.channels[n]){var r=e.channels[n].instrument,s=e.GM.byId[r].id,t=u[t];if(t)for(var c=s+""+t.id,l=0,d=i.length;d>l;l++){var f=(l+o+1)%d,p=a[f];if(p&&p==c)return i[f].pause(),a[f]=null,void 0}}};n.audioBuffers=i,n.send=function(){},n.setController=function(){},n.setVolume=function(e,n){r=n},n.programChange=function(n,t){e.channels[n].instrument=t},n.pitchBend=function(){},n.noteOn=function(e,n,r,o){var i=t[n];if(u[i])return o?setTimeout(function(){c(e,i)},1e3*o):(c(e,i),void 0)},n.noteOff=function(){},n.chordOn=function(e,n,r,o){for(var i=0;n.length>i;i++){var a=n[i],s=t[a];if(u[s]){if(o)return setTimeout(function(){c(e,s)},1e3*o);c(e,s)}}},n.chordOff=function(e,n,r){for(var o=0;n.length>o;o++){var i=n[o],a=t[i];if(u[a]){if(r)return setTimeout(function(){l(e,a)},1e3*r);l(e,a)}}},n.stopAllNotes=function(){for(var e=0,n=i.length;n>e;e++)i[e].pause()},n.connect=function(r){e.setDefaultPlugin(n);for(var o in e.keyToNote)t[e.keyToNote[o]]=o,u[o]={id:o};r.onsuccess&&r.onsuccess()}}()}(MIDI),function(e){"use strict";window.AudioContext&&function(){function n(e,n,t){if(o){var i=new Audio;i.src=e,i.controls=!1,i.autoplay=!1,i.preload=!1,i.addEventListener("canplay",function(){n&&n(i)}),i.addEventListener("error",function(e){t&&t(e)}),document.body.appendChild(i)}else if(0===e.indexOf("data:audio")){var a=e.split(",")[1],u=Base64Binary.decodeArrayBuffer(a);r.decodeAudioData(u,n,t)}else{var s=new XMLHttpRequest;s.open("GET",e,!0),s.responseType="arraybuffer",s.onload=function(){r.decodeAudioData(s.response,n,t)},s.send()}}function t(){return new(window.AudioContext||window.webkitAudioContext)}var r,o=!1,i=e.WebAudio={api:"webaudio"},a={},u={},s=127,c={};i.audioBuffers=c,i.send=function(){},i.setController=function(){},i.setVolume=function(e,n,t){t?setTimeout(function(){s=n},1e3*t):s=n},i.programChange=function(n,t){var r=e.channels[n];r.instrument=t},i.pitchBend=function(n,t){var r=e.channels[n];r.pitchBend=t},i.noteOn=function(n,t,i,l){l=l||0;var d=e.channels[n],f=d.instrument,p=f+""+t,A=c[p];if(A){if(r.currentTime>l&&(l+=r.currentTime),o)var m=r.createMediaElementSource(A);else{var m=r.createBufferSource();m.buffer=A}if(u){var v=m;for(var q in u)v.connect(u[q].input),v=u[q]}var g=2*i/127*(s/127)-1;if(m.connect(r.destination),m.playbackRate.value=1,m.gainNode=r.createGain(),m.gainNode.connect(r.destination),m.gainNode.gain.value=Math.min(1,Math.max(-1,g)),m.connect(m.gainNode),o){if(l)return setTimeout(function(){A.currentTime=0,A.play()},1e3*l);A.currentTime=0,A.play()}else m.start(l||0);return a[n+""+t]=m,m}},i.noteOff=function(n,t,i){i=i||0;var u=e.channels[n],s=u.instrument,l=s+""+t,d=c[l];if(d){r.currentTime>i&&(i+=r.currentTime);var f=a[n+""+t];if(f){if(f.gainNode){var p=f.gainNode.gain;p.linearRampToValueAtTime(p.value,i),p.linearRampToValueAtTime(-1,i+.3)}return o?i?setTimeout(function(){d.pause()},1e3*i):d.pause():f.noteOff?f.noteOff(i+.5):f.stop(i+.5),delete a[n+""+t],f}}},i.chordOn=function(e,n,t,r){for(var o,a={},u=0,s=n.length;s>u;u++)a[o=n[u]]=i.noteOn(e,o,t,r);return a},i.chordOff=function(e,n,t){for(var r,o={},a=0,u=n.length;u>a;a++)o[r=n[a]]=i.noteOff(e,r,t);return o},i.stopAllNotes=function(){for(var e in a){var n=0;r.currentTime>n&&(n+=r.currentTime);var t=a[e];t.gain.linearRampToValueAtTime(1,n),t.gain.linearRampToValueAtTime(0,n+.3),t.noteOff?t.noteOff(n+.3):t.stop(n+.3),delete a[e]}},i.setEffects=function(e){if(!r.tunajs)return console.log("Effects module not installed.");for(var n=0;e.length>n;n++){var t=e[n],o=new r.tunajs[t.type](t);o.connect(r.destination),u[t.type]=o}},i.connect=function(n){e.setDefaultPlugin(i),i.setContext(r||t(),n.onsuccess)},i.getContext=function(){return r},i.setContext=function(t,o){r=t,"undefined"==typeof Tuna||r.tunajs||(r.tunajs=new Tuna(r));var i=[],a=e.keyToNote;for(var u in a)i.push(u);var s=function(){for(var e in d)if(d[e])return;o&&(o(),o=null)},l=function(t,r,o,i){var a=t[i];a&&(d[r]++,n(a,function(n){n.id=i;var o=e.keyToNote[i];c[r+""+o]=n,0===--d[r]&&(t.isLoaded=!0,s(f))},function(){}))},d={};for(var f in e.Soundfont){var p=e.Soundfont[f];if(!p.isLoaded){var A=e.GM.byName[f],m=A.number;d[m]=0;for(var v=0;i.length>v;v++){var u=i[v];l(p,m,v,u)}}}setTimeout(s,1)}}()}(MIDI),function(e){"use strict";var n=null,t=null,r=e.WebMIDI={api:"webmidi"};r.send=function(e,n){t.send(e,1e3*n)},r.setController=function(e,n,r,o){t.send([e,n,r],1e3*o)},r.setVolume=function(e,n,r){t.send([176+e,7,n],1e3*r)},r.programChange=function(e,n,r){t.send([192+e,n],1e3*r)},r.pitchBend=function(e,n,r){t.send([224+e,n],1e3*r)},r.noteOn=function(e,n,r,o){t.send([144+e,n,r],1e3*o)},r.noteOff=function(e,n,r){t.send([128+e,n,0],1e3*r)},r.chordOn=function(e,n,r,o){for(var i=0;n.length>i;i++){var a=n[i];t.send([144+e,a,r],1e3*o)}},r.chordOff=function(e,n,r){for(var o=0;n.length>o;o++){var i=n[o];t.send([128+e,i,0],1e3*r)}},r.stopAllNotes=function(){t.cancel();for(var e=0;16>e;e++)t.send([176+e,123,0])},r.connect=function(o){e.setDefaultPlugin(r);var i=function(){if(window.AudioContext)o.api="webaudio";else{if(!window.Audio)return;o.api="audiotag"}e.loadPlugin(o)};navigator.requestMIDIAccess().then(function(e){n=e;var r=n.outputs;t="function"==typeof r?r()[0]:r[0],void 0===t?i():o.onsuccess&&o.onsuccess()},i)}}(MIDI),"undefined"==typeof MIDI&&(MIDI={}),function(e){var n=e.util||(e.util={});if(n.request=function(n,r,o,i){"use strict";"string"==typeof n&&(n={url:n});var a=n.data,u=n.url,s=n.method||(n.data?"POST":"GET"),c=n.format,l=n.headers,d=n.responseType,f=n.withCredentials||!1,r=r||n.onsuccess,o=o||n.onerror,i=i||n.onprogress;if(t!==void 0&&e.loc.isLocalUrl(u))return t.readFile(u,"utf8",function(e,n){e?o&&o(e):r&&r({responseText:n})}),void 0;var p=new XMLHttpRequest;if(p.open(s,u,!0),l)for(var A in l)p.setRequestHeader(A,l[A]);else a&&p.setRequestHeader("Content-type","application/x-www-form-urlencoded");return"binary"===c&&p.overrideMimeType&&p.overrideMimeType("text/plain; charset=x-user-defined"),d&&(p.responseType=d),f&&(p.withCredentials="true"),o&&"onerror"in p&&(p.onerror=o),i&&p.upload&&"onprogress"in p.upload&&(a?p.upload.onprogress=function(e){i.call(p,e,event.loaded/event.total)}:p.addEventListener("progress",function(e){var n=0;if(e.lengthComputable)n=e.total;else if(p.totalBytes)n=p.totalBytes;else{var t=parseInt(p.getResponseHeader("Content-Length-Raw"));if(!isFinite(t))return;p.totalBytes=n=t}i.call(p,e,e.loaded/n)})),p.onreadystatechange=function(n){if(4===p.readyState)if(200===p.status||304===p.status||308===p.status||0===p.status&&e.client.cordova){if(r){var t;if("xml"===c)t=n.target.responseXML;else if("text"===c)t=n.target.responseText;else if("json"===c)try{t=JSON.parse(n.target.response)}catch(i){o&&o.call(p,n)}r.call(p,n,t)}}else o&&o.call(p,n)},p.send(a),p},"undefined"!=typeof module&&module.exports){var t=require("fs");XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest,module.exports=e.util.request}}(MIDI),dom===void 0)var dom={};(function(){"use strict";dom.loadScript=function(){return this.loaded={},this.loading={},this},dom.loadScript.prototype.add=function(n){var t=this;"string"==typeof n&&(n={url:n});var r=n.urls;r===void 0&&(r=[{url:n.url,verify:n.verify}]);var o=document.getElementsByTagName("head")[0],i=function(n,r){t.loaded[n.url]||r&&e(r)===!1||(t.loaded[n.url]=!0,t.loading[n.url]&&t.loading[n.url](),delete t.loading[n.url],n.onsuccess&&n.onsuccess(),f!==void 0&&f())},a=!1,u=[],s=function(e){if("string"==typeof e&&(e={url:e,verify:n.verify}),/([\w\d.\[\]\'\"])$/.test(e.verify)){var r=e.test=e.verify;if("object"==typeof r)for(var s=0;r.length>s;s++)u.push(r[s]);else u.push(r)}if(!t.loaded[e.url]){var l=document.createElement("script");l.onreadystatechange=function(){("loaded"===this.readyState||"complete"===this.readyState)&&i(e)},l.onload=function(){i(e)},l.onerror=function(){if(a=!0,delete t.loading[e.url],"object"==typeof e.test)for(var n in e.test)c(e.test[n]);else c(e.test)},l.setAttribute("type","text/javascript"),l.setAttribute("src",e.url),o.appendChild(l),t.loading[e.url]=function(){}}},c=function(e){for(var n=[],t=0;u.length>t;t++)u[t]!==e&&n.push(u[t]);u=n},l=function(t){if(t)i(t,t.test);else for(var o=0;r.length>o;o++)i(r[o],r[o].test);for(var s=!0,o=0;u.length>o;o++)e(u[o])===!1&&(s=!1);!n.strictOrder&&s?a?n.error&&n.error():n.onsuccess&&n.onsuccess():setTimeout(function(){l(t)},10)};if(n.strictOrder){var d=-1,f=function(){if(d++,r[d]){var e=r[d],o=e.url;t.loading[o]?t.loading[o]=function(){e.onsuccess&&e.onsuccess(),f()}:t.loaded[o]?f():(s(e),l(e))}else a?n.error&&n.error():n.onsuccess&&n.onsuccess()};f()}else for(var d=0;r.length>d;d++)s(r[d]),l(r[d])},dom.loadScript=new dom.loadScript;var e=function(e,n){try{e=e.split('"').join("").split("'").join("").split("]").join("").split("[").join(".");for(var t=e.split("."),r=t.length,o=n||window,i=0;r>i;i++){var a=t[i];if(null==o[a])return!1;o=o[a]}return!0}catch(u){return!1}}})(),"undefined"!=typeof module&&module.exports&&(module.exports=dom.loadScript);
//https://github.com/davidchambers/Base64.js

;(function () {
  var object = typeof exports != 'undefined' ? exports : this; // #8: web workers
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  function InvalidCharacterError(message) {
    this.message = message;
  }
  InvalidCharacterError.prototype = new Error;
  InvalidCharacterError.prototype.name = 'InvalidCharacterError';

  // encoder
  // [https://gist.github.com/999166] by [https://github.com/nignag]
  object.btoa || (
  object.btoa = function (input) {
    for (
      // initialize result and counter
      var block, charCode, idx = 0, map = chars, output = '';
      // if the next input index does not exist:
      //   change the mapping table to "="
      //   check if d has no fractional digits
      input.charAt(idx | 0) || (map = '=', idx % 1);
      // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
      output += map.charAt(63 & block >> 8 - idx % 1 * 8)
    ) {
      charCode = input.charCodeAt(idx += 3/4);
      if (charCode > 0xFF) {
        throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
      }
      block = block << 8 | charCode;
    }
    return output;
  });

  // decoder
  // [https://gist.github.com/1020396] by [https://github.com/atk]
  object.atob || (
  object.atob = function (input) {
    input = input.replace(/=+$/, '')
    if (input.length % 4 == 1) {
      throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    for (
      // initialize result and counters
      var bc = 0, bs, buffer, idx = 0, output = '';
      // get next character
      buffer = input.charAt(idx++);
      // character found in table? initialize bit storage and add its ascii value;
      ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
        // and if not first of each 4 characters,
        // convert the first 8 bits to one ascii character
        bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
    ) {
      // try to find character in table (0-63, not found => -1)
      buffer = chars.indexOf(buffer);
    }
    return output;
  });

}());/**
 * @license -------------------------------------------------------------------
 *   module: Base64Binary
 *      src: http://blog.danguer.com/2011/10/24/base64-binary-decoding-in-javascript/
 *  license: Simplified BSD License
 * -------------------------------------------------------------------
 * Copyright 2011, Daniel Guerrero. All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     - Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     - Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL DANIEL GUERRERO BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

var Base64Binary = {
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

	/* will return a  Uint8Array type */
	decodeArrayBuffer: function(input) {
		var bytes = Math.ceil( (3*input.length) / 4.0);
		var ab = new ArrayBuffer(bytes);
		this.decode(input, ab);

		return ab;
	},

	decode: function(input, arrayBuffer) {
		//get last chars to see if are valid
		var lkey1 = this._keyStr.indexOf(input.charAt(input.length-1));		 
		var lkey2 = this._keyStr.indexOf(input.charAt(input.length-1));		 

		var bytes = Math.ceil( (3*input.length) / 4.0);
		if (lkey1 == 64) bytes--; //padding chars, so skip
		if (lkey2 == 64) bytes--; //padding chars, so skip

		var uarray;
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;
		var j = 0;

		if (arrayBuffer)
			uarray = new Uint8Array(arrayBuffer);
		else
			uarray = new Uint8Array(bytes);

		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

		for (i=0; i<bytes; i+=3) {	
			//get the 3 octects in 4 ascii chars
			enc1 = this._keyStr.indexOf(input.charAt(j++));
			enc2 = this._keyStr.indexOf(input.charAt(j++));
			enc3 = this._keyStr.indexOf(input.charAt(j++));
			enc4 = this._keyStr.indexOf(input.charAt(j++));

			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;

			uarray[i] = chr1;			
			if (enc3 != 64) uarray[i+1] = chr2;
			if (enc4 != 64) uarray[i+2] = chr3;
		}

		return uarray;	
	}
};/**
 * @license -------------------------------------------------------------------
 *   module: WebAudioShim - Fix naming issues for WebAudioAPI supports
 *      src: https://github.com/Dinahmoe/webaudioshim
 *   author: Dinahmoe AB
 * -------------------------------------------------------------------
 * Copyright (c) 2012 DinahMoe AB
 * 
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

window.AudioContext = window.AudioContext || window.webkitAudioContext || null;
window.OfflineAudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext || null;

(function (Context) {
	var isFunction = function (f) {
		return Object.prototype.toString.call(f) === "[object Function]" ||
			Object.prototype.toString.call(f) === "[object AudioContextConstructor]";
	};
	var contextMethods = [
		["createGainNode", "createGain"],
		["createDelayNode", "createDelay"],
		["createJavaScriptNode", "createScriptProcessor"]
	];
	///
	var proto;
	var instance;
	var sourceProto;
	///
	if (!isFunction(Context)) {
		return;
	}
	instance = new Context();
	if (!instance.destination || !instance.sampleRate) {
		return;
	}
	proto = Context.prototype;
	sourceProto = Object.getPrototypeOf(instance.createBufferSource());

	if (!isFunction(sourceProto.start)) {
		if (isFunction(sourceProto.noteOn)) {
			sourceProto.start = function (when, offset, duration) {
				switch (arguments.length) {
					case 0:
						throw new Error("Not enough arguments.");
					case 1:
						this.noteOn(when);
						break;
					case 2:
						if (this.buffer) {
							this.noteGrainOn(when, offset, this.buffer.duration - offset);
						} else {
							throw new Error("Missing AudioBuffer");
						}
						break;
					case 3:
						this.noteGrainOn(when, offset, duration);
				}
			};
		}
	}

	if (!isFunction(sourceProto.noteOn)) {
		sourceProto.noteOn = sourceProto.start;
	}

	if (!isFunction(sourceProto.noteGrainOn)) {
		sourceProto.noteGrainOn = sourceProto.start;
	}

	if (!isFunction(sourceProto.stop)) {
		sourceProto.stop = sourceProto.noteOff;
	}

	if (!isFunction(sourceProto.noteOff)) {
		sourceProto.noteOff = sourceProto.stop;
	}

	contextMethods.forEach(function (names) {
		var name1;
		var name2;
		while (names.length) {
			name1 = names.pop();
			if (isFunction(this[name1])) {
				this[names.pop()] = this[name1];
			} else {
				name2 = names.pop();
				this[name1] = this[name2];
			}
		}
	}, proto);
})(window.AudioContext);/*
    Copyright (c) 2012 DinahMoe AB

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy,
    modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software
    is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
    OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    
    Bitcrusher & Moog Filter by Zach Denton
*/

// https://developer.mozilla.org/en-US/docs/Web_Audio_API/Porting_webkitAudioContext_code_to_standards_based_AudioContext

// Originally written by Alessandro Saccoia, Chris Coniglio and Oskar Eriksson

(function (window) {
    var userContext;
    var userInstance;
    var Tuna = function (context) {
			if (!window.AudioContext) {
				window.AudioContext = window.webkitAudioContext;
			}
            if (!context) {
                console.log("tuna.js: Missing audio context! Creating a new context for you.");
                context = window.AudioContext && (new window.AudioContext());
            }
            userContext = context;
            userInstance = this;
        },
        version = "0.1",
        set = "setValueAtTime",
        linear = "linearRampToValueAtTime",
        pipe = function (param, val) {
            param.value = val;
        },
        Super = Object.create(null, {
            activate: {
                writable: true,
                value: function (doActivate) {
                    if (doActivate) {
                        this.input.disconnect();
                        this.input.connect(this.activateNode);
                        if (this.activateCallback) {
                            this.activateCallback(doActivate);
                        }
                    } else {
                        this.input.disconnect();
                        this.input.connect(this.output);
                    }
                }
            },
            bypass: {
                get: function () {
                    return this._bypass;
                },
                set: function (value) {
                    if (this._lastBypassValue === value) {
                        return;
                    }
                    this._bypass = value;
                    this.activate(!value);
                    this._lastBypassValue = value;
                }
            },
            connect: {
                value: function (target) {
                    this.output.connect(target);
                }
            },
            disconnect: {
                value: function (target) {
                    this.output.disconnect(target);
                }
            },
            connectInOrder: {
                value: function (nodeArray) {
                    var i = nodeArray.length - 1;
                    while(i--) {
                        if (!nodeArray[i].connect) {
                            return console.error("AudioNode.connectInOrder: TypeError: Not an AudioNode.", nodeArray[i]);
                        }
                        if (nodeArray[i + 1].input) {
                            nodeArray[i].connect(nodeArray[i + 1].input);
                        } else {
                            nodeArray[i].connect(nodeArray[i + 1]);
                        }
                    }
                }
            },
            getDefaults: {
                value: function () {
                    var result = {};
                    for(var key in this.defaults) {
                        result[key] = this.defaults[key].value;
                    }
                    return result;
                }
            },
            getValues: {
                value: function () {
                    var result = {};
                    for(var key in this.defaults) {
                        result[key] = this[key];
                    }
                    return result;
                }
            },
            automate: {
                value: function (property, value, duration, startTime) {
                    var start = startTime ? ~~ (startTime / 1000) : userContext.currentTime,
                        dur = duration ? ~~ (duration / 1000) : 0,
                        _is = this.defaults[property],
                        param = this[property],
                        method;

                    if (param) {
                        if (_is.automatable) {
                            if (!duration) {
                                method = set;
                            } else {
                                method = linear;
                                param.cancelScheduledValues(start);
                                param.setValueAtTime(param.value, start);
                            }
                            param[method](value, dur + start);
                        } else {
                            param = value;
                        }
                    } else {
                        console.error("Invalid Property for " + this.name);
                    }
                }
            }
        }),
        FLOAT = "float",
        BOOLEAN = "boolean",
        STRING = "string",
        INT = "int";

    function dbToWAVolume(db) {
        return Math.max(0, Math.round(100 * Math.pow(2, db / 6)) / 100);
    }

    function fmod(x, y) {
        // http://kevin.vanzonneveld.net
        // +   original by: Onno Marsman
        // +      input by: Brett Zamir (http://brett-zamir.me)
        // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // *     example 1: fmod(5.7, 1.3);
        // *     returns 1: 0.5
        var tmp, tmp2, p = 0,
            pY = 0,
            l = 0.0,
            l2 = 0.0;

        tmp = x.toExponential().match(/^.\.?(.*)e(.+)$/);
        p = parseInt(tmp[2], 10) - (tmp[1] + '').length;
        tmp = y.toExponential().match(/^.\.?(.*)e(.+)$/);
        pY = parseInt(tmp[2], 10) - (tmp[1] + '').length;

        if (pY > p) {
            p = pY;
        }

        tmp2 = (x % y);

        if (p < -100 || p > 20) {
            // toFixed will give an out of bound error so we fix it like this:
            l = Math.round(Math.log(tmp2) / Math.log(10));
            l2 = Math.pow(10, l);

            return(tmp2 / l2).toFixed(l - p) * l2;
        } else {
            return parseFloat(tmp2.toFixed(-p));
        }
    }

    function sign(x) {
        if (x === 0) {
            return 1;
        } else {
            return Math.abs(x) / x;
        }
    }

    function tanh(n) {
        return(Math.exp(n) - Math.exp(-n)) / (Math.exp(n) + Math.exp(-n));
    }

    Tuna.toString = Tuna.prototype.toString = function () {
        return "You are running Tuna version " + version + " by Dinahmoe!";
    };
    Tuna.prototype.Filter = function (properties) {
        if (!properties) {
            properties = this.getDefaults();
        }
        this.input = userContext.createGain();
        this.activateNode = userContext.createGain();
        this.filter = userContext.createBiquadFilter();
        this.output = userContext.createGain();

        this.activateNode.connect(this.filter);
        this.filter.connect(this.output);

        this.frequency = properties.frequency || this.defaults.frequency.value;
        this.Q = properties.resonance || this.defaults.Q.value;
        this.filterType = properties.filterType || this.defaults.filterType.value;
        this.gain = properties.gain || this.defaults.gain.value;
        this.bypass = properties.bypass || false;
    };
    Tuna.prototype.Filter.prototype = Object.create(Super, {
        name: {
            value: "Filter"
        },
        defaults: {
            writable:true,
            value: {
                frequency: {
                    value: 800,
                    min: 20,
                    max: 22050,
                    automatable: true
                },
                Q: {
                    value: 1,
                    min: 0.001,
                    max: 100,
                    automatable: true
                },
                gain: {
                    value: 0,
                    min: -40,
                    max: 40,
                    automatable: true
                },
                bypass: {
                    value: true,
                    automatable: false,
                    type: BOOLEAN
                },
                filterType: {
                    value: 1,
                    min: 0,
                    max: 7,
                    automatable: false,
                    type: INT
                }
            }
        },
        filterType: {
            enumerable: true,
            get: function () {
                return this.filter.type;
            },
            set: function (value) {
                this.filter.type = value;
            }
        },
        Q: {
            enumerable: true,
            get: function () {
                return this.filter.Q;
            },
            set: function (value) {
                this.filter.Q.value = value;
            }
        },
        gain: {
            enumerable: true,
            get: function () {
                return this.filter.gain;
            },
            set: function (value) {
                this.filter.gain.value = value;
            }
        },
        frequency: {
            enumerable: true,
            get: function () {
                return this.filter.frequency;
            },
            set: function (value) {
                this.filter.frequency.value = value;
            }
        }
    });
    Tuna.prototype.Bitcrusher = function (properties) {
        if (!properties) {
            properties = this.getDefaults();
        }
        this.bufferSize = properties.bufferSize || this.defaults.bufferSize.value;

        this.input = userContext.createGain();
        this.activateNode = userContext.createGain();
        this.processor = userContext.createScriptProcessor(this.bufferSize, 1, 1);
        this.output = userContext.createGain();

        this.activateNode.connect(this.processor);
        this.processor.connect(this.output);

        var phaser = 0, last = 0;
        this.processor.onaudioprocess = function (e) {
            var input = e.inputBuffer.getChannelData(0),
                output = e.outputBuffer.getChannelData(0),
                step = Math.pow(1/2, this.bits);
            for(var i = 0; i < input.length; i++) {
                phaser += this.normfreq;
                if (phaser >= 1.0) {
                    phaser -= 1.0;
                    last = step * Math.floor(input[i] / step + 0.5);
                }
                output[i] = last;
            }
        };

        this.bits = properties.bits || this.defaults.bits.value;
        this.normfreq = properties.normfreq || this.defaults.normfreq.value;
        this.bypass = properties.bypass || false;
    };
    Tuna.prototype.Bitcrusher.prototype = Object.create(Super, {
        name: {
            value: "Bitcrusher"
        },
        defaults: {
            writable: true,
            value: {
                bits: {
                    value: 4,
                    min: 1,
                    max: 16,
                    automatable: false,
                    type: INT
                },
                bufferSize: {
                    value: 4096,
                    min: 256,
                    max: 16384,
                    automatable: false,
                    type: INT
                },
                bypass: {
                    value: false,
                    automatable: false,
                    type: BOOLEAN
                },
                normfreq: {
                    value: 0.1,
                    min: 0.0001,
                    max: 1.0,
                    automatable: false,
                }
            }
        },
        bits: {
            enumerable: true,
            get: function () {
                return this.processor.bits;
            },
            set: function (value) {
                this.processor.bits = value;
            }
        },
        normfreq: {
            enumerable: true,
            get: function () {
                return this.processor.normfreq;
            },
            set: function (value) {
                this.processor.normfreq = value;
            }
        }
    });
    Tuna.prototype.Cabinet = function (properties) {
        if (!properties) {
            properties = this.getDefaults();
        }
        this.input = userContext.createGain();
        this.activateNode = userContext.createGain();
        this.convolver = this.newConvolver(properties.impulsePath || "../impulses/impulse_guitar.wav");
        this.makeupNode = userContext.createGain();
        this.output = userContext.createGain();

        this.activateNode.connect(this.convolver.input);
        this.convolver.output.connect(this.makeupNode);
        this.makeupNode.connect(this.output);

        this.makeupGain = properties.makeupGain || this.defaults.makeupGain;
        this.bypass = properties.bypass || false;
    };
    Tuna.prototype.Cabinet.prototype = Object.create(Super, {
        name: {
            value: "Cabinet"
        },
        defaults: {
            writable:true,
            value: {
                makeupGain: {
                    value: 1,
                    min: 0,
                    max: 20,
                    automatable: true
                },
                bypass: {
                    value: false,
                    automatable: false,
                    type: BOOLEAN
                }
            }
        },
        makeupGain: {
            enumerable: true,
            get: function () {
                return this.makeupNode.gain;
            },
            set: function (value) {
                this.makeupNode.gain.value = value;
            }
        },
        newConvolver: {
            value: function (impulsePath) {
                return new userInstance.Convolver({
                    impulse: impulsePath,
                    dryLevel: 0,
                    wetLevel: 1
                });
            }
        }
    });
    Tuna.prototype.Chorus = function (properties) {
        if (!properties) {
            properties = this.getDefaults();
        }
        this.input = userContext.createGain();
        this.attenuator = this.activateNode = userContext.createGain();
        this.splitter = userContext.createChannelSplitter(2);
        this.delayL = userContext.createDelayNode();
        this.delayR = userContext.createDelayNode();
        this.feedbackGainNodeLR = userContext.createGain();
        this.feedbackGainNodeRL = userContext.createGain();
        this.merger = userContext.createChannelMerger(2);
        this.output = userContext.createGain();

        this.lfoL = new userInstance.LFO({
            target: this.delayL.delayTime,
            callback: pipe
        });
        this.lfoR = new userInstance.LFO({
            target: this.delayR.delayTime,
            callback: pipe
        });

        this.input.connect(this.attenuator);
        this.attenuator.connect(this.output);
        this.attenuator.connect(this.splitter);
        this.splitter.connect(this.delayL, 0);
        this.splitter.connect(this.delayR, 1);
        this.delayL.connect(this.feedbackGainNodeLR);
        this.delayR.connect(this.feedbackGainNodeRL);
        this.feedbackGainNodeLR.connect(this.delayR);
        this.feedbackGainNodeRL.connect(this.delayL);
        this.delayL.connect(this.merger, 0, 0);
        this.delayR.connect(this.merger, 0, 1);
        this.merger.connect(this.output);

        this.feedback = properties.feedback || this.defaults.feedback.value;
        this.rate = properties.rate || this.defaults.rate.value;
        this.delay = properties.delay || this.defaults.delay.value;
        this.depth = properties.depth || this.defaults.depth.value;
        this.lfoR.phase = Math.PI / 2;
        this.attenuator.gain.value = 0.6934; // 1 / (10 ^ (((20 * log10(3)) / 3) / 20))
        this.lfoL.activate(true);
        this.lfoR.activate(true);
        this.bypass = properties.bypass || false;
    };
    Tuna.prototype.Chorus.prototype = Object.create(Super, {
        name: {
            value: "Chorus"
        },
        defaults: {
            writable:true,
            value: {
                feedback: {
                    value: 0.4,
                    min: 0,
                    max: 0.95,
                    automatable: false,
                },
                delay: {
                    value: 0.0045,
                    min: 0,
                    max: 1,
                    automatable: false,
                },
                depth: {
                    value: 0.7,
                    min: 0,
                    max: 1,
                    automatable: false,
                },
                rate: {
                    value: 1.5,
                    min: 0,
                    max: 8,
                    automatable: false,
                },
                bypass: {
                    value: true,
                    automatable: false,
                    type: BOOLEAN
                }
            }
        },
        delay: {
            enumerable: true,
            get: function () {
                return this._delay;
            },
            set: function (value) {
                this._delay = 0.0002 * (Math.pow(10, value) * 2);
                this.lfoL.offset = this._delay;
                this.lfoR.offset = this._delay;
                this._depth = this._depth;
            }
        },
        depth: {
            enumerable: true,
            get: function () {
                return this._depth;
            },
            set: function (value) {
                this._depth = value;
                this.lfoL.oscillation = this._depth * this._delay;
                this.lfoR.oscillation = this._depth * this._delay;
            }
        },
        feedback: {
            enumerable: true,
            get: function () {
                return this._feedback;
            },
            set: function (value) {
                this._feedback = value;
                this.feedbackGainNodeLR.gain.value = this._feedback;
                this.feedbackGainNodeRL.gain.value = this._feedback;
            }
        },
        rate: {
            enumerable: true,
            get: function () {
                return this._rate;
            },
            set: function (value) {
                this._rate = value;
                this.lfoL.frequency = this._rate;
                this.lfoR.frequency = this._rate;
            }
        }
    });
    Tuna.prototype.Compressor = function (properties) {
        if (!properties) {
            properties = this.getDefaults();
        }
        this.input = userContext.createGain();
        this.compNode = this.activateNode = userContext.createDynamicsCompressor();
        this.makeupNode = userContext.createGain();
        this.output = userContext.createGain();

        this.compNode.connect(this.makeupNode);
        this.makeupNode.connect(this.output);

        this.automakeup = properties.automakeup || this.defaults.automakeup.value;
        this.makeupGain = properties.makeupGain || this.defaults.makeupGain.value;
        this.threshold = properties.threshold || this.defaults.threshold.value;
        this.release = properties.release || this.defaults.release.value;
        this.attack = properties.attack || this.defaults.attack.value;
        this.ratio = properties.ratio || this.defaults.ratio.value;
        this.knee = properties.knee || this.defaults.knee.value;
        this.bypass = properties.bypass || false;
    };
    Tuna.prototype.Compressor.prototype = Object.create(Super, {
        name: {
            value: "Compressor"
        },
        defaults: {
            writable:true,
            value: {
                threshold: {
                    value: -20,
                    min: -60,
                    max: 0,
                    automatable: true
                },
                release: {
                    value: 250,
                    min: 10,
                    max: 2000,
                    automatable: true
                },
                makeupGain: {
                    value: 1,
                    min: 1,
                    max: 100,
                    automatable: true
                },
                attack: {
                    value: 1,
                    min: 0,
                    max: 1000,
                    automatable: true
                },
                ratio: {
                    value: 4,
                    min: 1,
                    max: 50,
                    automatable: true
                },
                knee: {
                    value: 5,
                    min: 0,
                    max: 40,
                    automatable: true
                },
                automakeup: {
                    value: false,
                    automatable: false,
                    type: BOOLEAN
                },
                bypass: {
                    value: true,
                    automatable: false,
                    type: BOOLEAN
                }
            }
        },
        computeMakeup: {
            value: function () {
                var magicCoefficient = 4,
                    // raise me if the output is too hot
                    c = this.compNode;
                return -(c.threshold.value - c.threshold.value / c.ratio.value) / magicCoefficient;
            }
        },
        automakeup: {
            enumerable: true,
            get: function () {
                return this._automakeup;
            },
            set: function (value) {
                this._automakeup = value;
                if (this._automakeup) this.makeupGain = this.computeMakeup();
            }
        },
        threshold: {
            enumerable: true,
            get: function () {
                return this.compNode.threshold;
            },
            set: function (value) {
                this.compNode.threshold.value = value;
                if (this._automakeup) this.makeupGain = this.computeMakeup();
            }
        },
        ratio: {
            enumerable: true,
            get: function () {
                return this.compNode.ratio;
            },
            set: function (value) {
                this.compNode.ratio.value = value;
                if (this._automakeup) this.makeupGain = this.computeMakeup();
            }
        },
        knee: {
            enumerable: true,
            get: function () {
                return this.compNode.knee;
            },
            set: function (value) {
                this.compNode.knee.value = value;
                if (this._automakeup) this.makeupGain = this.computeMakeup();
            }
        },
        attack: {
            enumerable: true,
            get: function () {
                return this.compNode.attack;
            },
            set: function (value) {
                this.compNode.attack.value = value / 1000;
            }
        },
        release: {
            enumerable: true,
            get: function () {
                return this.compNode.release;
            },
            set: function (value) {
                this.compNode.release = value / 1000;
            }
        },
        makeupGain: {
            enumerable: true,
            get: function () {
                return this.makeupNode.gain;
            },
            set: function (value) {
                this.makeupNode.gain.value = dbToWAVolume(value);
            }
        }
    });
    Tuna.prototype.Convolver = function (properties) {
        if (!properties) {
            properties = this.getDefaults();
        }
        this.input = userContext.createGain();
        this.activateNode = userContext.createGain();
        this.convolver = userContext.createConvolver();
        this.dry = userContext.createGain();
        this.filterLow = userContext.createBiquadFilter();
        this.filterHigh = userContext.createBiquadFilter();
        this.wet = userContext.createGain();
        this.output = userContext.createGain();

        this.activateNode.connect(this.filterLow);
        this.activateNode.connect(this.dry);
        this.filterLow.connect(this.filterHigh);
        this.filterHigh.connect(this.convolver);
        this.convolver.connect(this.wet);
        this.wet.connect(this.output);
        this.dry.connect(this.output);

        this.dryLevel = properties.dryLevel || this.defaults.dryLevel.value;
        this.wetLevel = properties.wetLevel || this.defaults.wetLevel.value;
        this.highCut = properties.highCut || this.defaults.highCut.value;
        this.buffer = properties.impulse || "../impulses/ir_rev_short.wav";
        this.lowCut = properties.lowCut || this.defaults.lowCut.value;
        this.level = properties.level || this.defaults.level.value;
        this.filterHigh.type = this.filterHigh.LOWPASS;
        this.filterLow.type = this.filterHigh.HIGHPASS;
        this.bypass = properties.bypass || false;
    };
    Tuna.prototype.Convolver.prototype = Object.create(Super, {
        name: {
            value: "Convolver"
        },
        defaults: {
            writable:true,
            value: {
                highCut: {
                    value: 22050,
                    min: 20,
                    max: 22050,
                    automatable: true
                },
                lowCut: {
                    value: 20,
                    min: 20,
                    max: 22050,
                    automatable: true
                },
                dryLevel: {
                    value: 1,
                    min: 0,
                    max: 1,
                    automatable: true
                },
                wetLevel: {
                    value: 1,
                    min: 0,
                    max: 1,
                    automatable: true
                },
                level: {
                    value: 1,
                    min: 0,
                    max: 1,
                    automatable: true
                }
            }
        },
        lowCut: {
            get: function () {
                return this.filterLow.frequency;
            },
            set: function (value) {
                this.filterLow.frequency.value = value;
            }
        },
        highCut: {
            get: function () {
                return this.filterHigh.frequency;
            },
            set: function (value) {
                this.filterHigh.frequency.value = value;
            }
        },
        level: {
            get: function () {
                return this.output.gain;
            },
            set: function (value) {
                this.output.gain.value = value;
            }
        },
        dryLevel: {
            get: function () {
                return this.dry.gain
            },
            set: function (value) {
                this.dry.gain.value = value;
            }
        },
        wetLevel: {
            get: function () {
                return this.wet.gain;
            },
            set: function (value) {
                this.wet.gain.value = value;
            }
        },
        buffer: {
            enumerable: false,
            get: function () {
                return this.convolver.buffer;
            },
            set: function (impulse) {
                var convolver = this.convolver,
                    xhr = new XMLHttpRequest();
                if (!impulse) {
                    console.log("Tuna.Convolver.setBuffer: Missing impulse path!");
                    return;
                }
                xhr.open("GET", impulse, true);
                xhr.responseType = "arraybuffer";
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status < 300 && xhr.status > 199 || xhr.status === 302) {
                            userContext.decodeAudioData(xhr.response, function (buffer) {
                                convolver.buffer = buffer;
                            }, function (e) {
                                if (e) console.log("Tuna.Convolver.setBuffer: Error decoding data" + e);
                            });
                        }
                    }
                };
                xhr.send(null);
            }
        }
    });
    Tuna.prototype.Delay = function (properties) {
        if (!properties) {
            properties = this.getDefaults();
        }
        this.input = userContext.createGain();
        this.activateNode = userContext.createGain();
        this.dry = userContext.createGain();
        this.wet = userContext.createGain();
        this.filter = userContext.createBiquadFilter();
        this.delay = userContext.createDelayNode();
        this.feedbackNode = userContext.createGain();
        this.output = userContext.createGain();

        this.activateNode.connect(this.delay);
        this.activateNode.connect(this.dry);
        this.delay.connect(this.filter);
        this.filter.connect(this.feedbackNode);
        this.feedbackNode.connect(this.delay);
        this.feedbackNode.connect(this.wet);
        this.wet.connect(this.output);
        this.dry.connect(this.output);

        this.delayTime = properties.delayTime || this.defaults.delayTime.value;
        this.feedback = properties.feedback || this.defaults.feedback.value;
        this.wetLevel = properties.wetLevel || this.defaults.wetLevel.value;
        this.dryLevel = properties.dryLevel || this.defaults.dryLevel.value;
        this.cutoff = properties.cutoff || this.defaults.cutoff.value;
        this.filter.type = this.filter.LOWPASS;
        this.bypass = properties.bypass || false;
    };
    
    Tuna.prototype.Delay.prototype = Object.create(Super, {
        name: {
            value: "Delay"
        },
        defaults: {
            writable:true,
            value: {
                delayTime: {
                    value: 100,
                    min: 20,
                    max: 1000,
                    automatable: false,
                },
                feedback: {
                    value: 0.45,
                    min: 0,
                    max: 0.9,
                    automatable: true
                },
                cutoff: {
                    value: 20000,
                    min: 20,
                    max: 20000,
                    automatable: true
                },
                wetLevel: {
                    value: 0.5,
                    min: 0,
                    max: 1,
                    automatable: true
                },
                dryLevel: {
                    value: 1,
                    min: 0,
                    max: 1,
                    automatable: true
                }
            }
        },
        delayTime: {
            enumerable: true,
            get: function () {
                return this.delay.delayTime;
            },
            set: function (value) {
                this.delay.delayTime.value = value / 1000;
            }
        },
        wetLevel: {
            enumerable: true,
            get: function () {
                return this.wet.gain;
            },
            set: function (value) {
                this.wet.gain.value = value;
            }
        },
        dryLevel: {
            enumerable: true,
            get: function () {
                return this.dry.gain;
            },
            set: function (value) {
                this.dry.gain.value = value;
            }
        },
        feedback: {
            enumerable: true,
            get: function () {
                return this.feedbackNode.gain;
            },
            set: function (value) {
                this.feedbackNode.gain.value = value;
            }
        },
        cutoff: {
            enumerable: true,
            get: function () {
                return this.filter.frequency;
            },
            set: function (value) {
                this.filter.frequency.value = value;
            }
        }
    });
    Tuna.prototype.MoogFilter = function (properties) {
        if (!properties) {
            properties = this.getDefaults();
        }
        this.bufferSize = properties.bufferSize || this.defaults.bufferSize.value;

        this.input = userContext.createGain();
        this.activateNode = userContext.createGain();
        this.processor = userContext.createScriptProcessor(this.bufferSize, 1, 1);
        this.output = userContext.createGain();

        this.activateNode.connect(this.processor);
        this.processor.connect(this.output);

        var in1, in2, in3, in4, out1, out2, out3, out4;
        in1 = in2 = in3 = in4 = out1 = out2 = out3 = out4 = 0.0;
        this.processor.onaudioprocess = function (e) {
            var input = e.inputBuffer.getChannelData(0),
                output = e.outputBuffer.getChannelData(0),
                f = this.cutoff * 1.16,
                fb = this.resonance * (1.0 - 0.15 * f * f);
            for(var i = 0; i < input.length; i++) {
                input[i] -= out4 * fb;
                input[i] *= 0.35013 * (f*f)*(f*f);
                out1 = input[i] + 0.3 * in1 + (1 - f) * out1; // Pole 1
                in1 = input[i];
                out2 = out1 + 0.3 * in2 + (1 - f) * out2; // Pole 2
                in2 = out1;
                out3 = out2 + 0.3 * in3 + (1 - f) * out3; // Pole 3
                in3 = out2;
                out4 = out3 + 0.3 * in4 + (1 - f) * out4; // Pole 4
                in4 = out3;
                output[i] = out4;
            }
        };

        this.cutoff = properties.cutoff || this.defaults.cutoff.value;
        this.resonance = properties.resonance || this.defaults.resonance.value;
        this.bypass = properties.bypass || false;
    };
    Tuna.prototype.MoogFilter.prototype = Object.create(Super, {
        name: {
            value: "MoogFilter"
        },
        defaults: {
            writable: true,
            value: {
                bufferSize: {
                    value: 4096,
                    min: 256,
                    max: 16384,
                    automatable: false,
                    type: INT
                },
                bypass: {
                    value: false,
                    automatable: false,
                    type: BOOLEAN
                },
                cutoff: {
                    value: 0.065,
                    min: 0.0001,
                    max: 1.0,
                    automatable: false,
                },
                resonance: {
                    value: 3.5,
                    min: 0.0,
                    max: 4.0,
                    automatable: false,
                }
            }
        },
        cutoff: {
            enumerable: true,
            get: function () {
                return this.processor.cutoff;
            },
            set: function (value) {
                this.processor.cutoff = value;
            }
        },
        resonance: {
            enumerable: true,
            get: function () {
                return this.processor.resonance;
            },
            set: function (value) {
                this.processor.resonance = value;
            }
        }
    });
    Tuna.prototype.Overdrive = function (properties) {
        if (!properties) {
            properties = this.getDefaults();
        }
        this.input = userContext.createGain();
        this.activateNode = userContext.createGain();
        this.inputDrive = userContext.createGain();
        this.waveshaper = userContext.createWaveShaper();
        this.outputDrive = userContext.createGain();
        this.output = userContext.createGain();

        this.activateNode.connect(this.inputDrive);
        this.inputDrive.connect(this.waveshaper);
        this.waveshaper.connect(this.outputDrive);
        this.outputDrive.connect(this.output);

        this.ws_table = new Float32Array(this.k_nSamples);
        this.drive = properties.drive || this.defaults.drive.value;
        this.outputGain = properties.outputGain || this.defaults.outputGain.value;
        this.curveAmount = properties.curveAmount || this.defaults.curveAmount.value;
        this.algorithmIndex = properties.algorithmIndex || this.defaults.algorithmIndex.value;
        this.bypass = properties.bypass || false;
    };
    Tuna.prototype.Overdrive.prototype = Object.create(Super, {
        name: {
            value: "Overdrive"
        },
        defaults: {
            writable:true,
            value: {
                drive: {
                    value: 1,
                    min: 0,
                    max: 1,
                    automatable: true,
                    type: FLOAT,
                    scaled: true
                },
                outputGain: {
                    value: 1,
                    min: 0,
                    max: 1,
                    automatable: true,
                    type: FLOAT,
                    scaled: true
                },
                curveAmount: {
                    value: 0.725,
                    min: 0,
                    max: 1,
                    automatable: false,
                },
                algorithmIndex: {
                    value: 0,
                    min: 0,
                    max: 5,
                    automatable: false,
                    type: INT
                }
            }
        },
        k_nSamples: {
            value: 8192
        },
        drive: {
            get: function () {
                return this.inputDrive.gain;
            },
            set: function (value) {
                this._drive = value;
            }
        },
        curveAmount: {
            get: function () {
                return this._curveAmount;
            },
            set: function (value) {
                this._curveAmount = value;
                if (this._algorithmIndex === undefined) {
                    this._algorithmIndex = 0;
                }
                this.waveshaperAlgorithms[this._algorithmIndex](this._curveAmount, this.k_nSamples, this.ws_table);
                this.waveshaper.curve = this.ws_table;
            }
        },
        outputGain: {
            get: function () {
                return this.outputDrive.gain;
            },
            set: function (value) {
                this._outputGain = dbToWAVolume(value);
            }
        },
        algorithmIndex: {
            get: function () {
                return this._algorithmIndex;
            },
            set: function (value) {
                this._algorithmIndex = value>>0;
                this.curveAmount = this._curveAmount;
            }
        },
        waveshaperAlgorithms: {
            value: [

            function (amount, n_samples, ws_table) {
                amount = Math.min(amount, 0.9999);
                var k = 2 * amount / (1 - amount),
                    i, x;
                for(i = 0; i < n_samples; i++) {
                    x = i * 2 / n_samples - 1;
                    ws_table[i] = (1 + k) * x / (1 + k * Math.abs(x));
                }
            }, function (amount, n_samples, ws_table) {
                var i, x, y;
                for(i = 0; i < n_samples; i++) {
                    x = i * 2 / n_samples - 1;
                    y = ((0.5 * Math.pow((x + 1.4), 2)) - 1) * y >= 0 ? 5.8 : 1.2;
                    ws_table[i] = tanh(y);
                }
            }, function (amount, n_samples, ws_table) {
                var i, x, y, a = 1 - amount;
                for(i = 0; i < n_samples; i++) {
                    x = i * 2 / n_samples - 1;
                    y = x < 0 ? -Math.pow(Math.abs(x), a + 0.04) : Math.pow(x, a);
                    ws_table[i] = tanh(y * 2);
                }
            }, function (amount, n_samples, ws_table) {
                var i, x, y, abx, a = 1 - amount > 0.99 ? 0.99 : 1 - amount;
                for(i = 0; i < n_samples; i++) {
                    x = i * 2 / n_samples - 1;
                    abx = Math.abs(x);
                    if (abx < a) y = abx;
                    else if (abx > a) y = a + (abx - a) / (1 + Math.pow((abx - a) / (1 - a), 2));
                    else if (abx > 1) y = abx;
                    ws_table[i] = sign(x) * y * (1 / ((a + 1) / 2));
                }
            }, function (amount, n_samples, ws_table) { // fixed curve, amount doesn't do anything, the distortion is just from the drive
                var i, x;
                for(i = 0; i < n_samples; i++) {
                    x = i * 2 / n_samples - 1;
                    if (x < -0.08905) {
                        ws_table[i] = (-3 / 4) * (1 - (Math.pow((1 - (Math.abs(x) - 0.032857)), 12)) + (1 / 3) * (Math.abs(x) - 0.032847)) + 0.01;
                    } else if (x >= -0.08905 && x < 0.320018) {
                        ws_table[i] = (-6.153 * (x * x)) + 3.9375 * x;
                    } else {
                        ws_table[i] = 0.630035;
                    }
                }
            }, function (amount, n_samples, ws_table) {
                var a = 2 + Math.round(amount * 14),
                    // we go from 2 to 16 bits, keep in mind for the UI
                    bits = Math.round(Math.pow(2, a - 1)),
                    // real number of quantization steps divided by 2
                    i, x;
                for(i = 0; i < n_samples; i++) {
                    x = i * 2 / n_samples - 1;
                    ws_table[i] = Math.round(x * bits) / bits;
                }
            }]
        }
    });
    Tuna.prototype.Phaser = function (properties) {
        if (!properties) {
            properties = this.getDefaults();
        }
        this.input = userContext.createGain();
        this.splitter = this.activateNode = userContext.createChannelSplitter(2);
        this.filtersL = [];
        this.filtersR = [];
        this.feedbackGainNodeL = userContext.createGain();
        this.feedbackGainNodeR = userContext.createGain();
        this.merger = userContext.createChannelMerger(2);
        this.filteredSignal = userContext.createGain();
        this.output = userContext.createGain();
        this.lfoL = new userInstance.LFO({
            target: this.filtersL,
            callback: this.callback
        });
        this.lfoR = new userInstance.LFO({
            target: this.filtersR,
            callback: this.callback
        });

        var i = this.stage;
        while(i--) {
            this.filtersL[i] = userContext.createBiquadFilter();
            this.filtersR[i] = userContext.createBiquadFilter();
            this.filtersL[i].type = this.filtersL[i].ALLPASS;
            this.filtersR[i].type = this.filtersR[i].ALLPASS;
        }
        this.input.connect(this.splitter);
        this.input.connect(this.output);
        this.splitter.connect(this.filtersL[0], 0, 0);
        this.splitter.connect(this.filtersR[0], 1, 0);
        this.connectInOrder(this.filtersL);
        this.connectInOrder(this.filtersR);
        this.filtersL[this.stage - 1].connect(this.feedbackGainNodeL);
        this.filtersL[this.stage - 1].connect(this.merger, 0, 0);
        this.filtersR[this.stage - 1].connect(this.feedbackGainNodeR);
        this.filtersR[this.stage - 1].connect(this.merger, 0, 1);
        this.feedbackGainNodeL.connect(this.filtersL[0]);
        this.feedbackGainNodeR.connect(this.filtersR[0]);
        this.merger.connect(this.output);

        this.rate = properties.rate || this.defaults.rate.value;
        this.baseModulationFrequency = properties.baseModulationFrequency || this.defaults.baseModulationFrequency.value;
        this.depth = properties.depth || this.defaults.depth.value;
        this.feedback = properties.feedback || this.defaults.feedback.value;
        this.stereoPhase = properties.stereoPhase || this.defaults.stereoPhase.value;

        this.lfoL.activate(true);
        this.lfoR.activate(true);
        this.bypass = properties.bypass || false;
    };
    Tuna.prototype.Phaser.prototype = Object.create(Super, {
        name: {
            value: "Phaser"
        },
        stage: {
            value: 4
        },
        defaults: {
            writable:true,
            value: {
                rate: {
                    value: 0.1,
                    min: 0,
                    max: 8,
                    automatable: false,
                },
                depth: {
                    value: 0.6,
                    min: 0,
                    max: 1,
                    automatable: false,
                },
                feedback: {
                    value: 0.7,
                    min: 0,
                    max: 1,
                    automatable: false,
                },
                stereoPhase: {
                    value: 40,
                    min: 0,
                    max: 180,
                    automatable: false,
                },
                baseModulationFrequency: {
                    value: 700,
                    min: 500,
                    max: 1500,
                    automatable: false,
                }
            }
        },
        callback: {
            value: function (filters, value) {
                for(var stage = 0; stage < 4; stage++) {
                    filters[stage].frequency.value = value;
                }
            }
        },
        depth: {
            get: function () {
                return this._depth;
            },
            set: function (value) {
                this._depth = value;
                this.lfoL.oscillation = this._baseModulationFrequency * this._depth;
                this.lfoR.oscillation = this._baseModulationFrequency * this._depth;
            }
        },
        rate: {
            get: function () {
                return this._rate;
            },
            set: function (value) {
                this._rate = value;
                this.lfoL.frequency = this._rate;
                this.lfoR.frequency = this._rate;
            }
        },
        baseModulationFrequency: {
            enumerable: true,
            get: function () {
                return this._baseModulationFrequency;
            },
            set: function (value) {
                this._baseModulationFrequency = value;
                this.lfoL.offset = this._baseModulationFrequency;
                this.lfoR.offset = this._baseModulationFrequency;
                this._depth = this._depth;
            }
        },
        feedback: {
            get: function () {
                return this._feedback;
            },
            set: function (value) {
                this._feedback = value;
                this.feedbackGainNodeL.gain.value = this._feedback;
                this.feedbackGainNodeR.gain.value = this._feedback;
            }
        },
        stereoPhase: {
            get: function () {
                return this._stereoPhase;
            },
            set: function (value) {
                this._stereoPhase = value;
                var newPhase = this.lfoL._phase + this._stereoPhase * Math.PI / 180;
                newPhase = fmod(newPhase, 2 * Math.PI);
                this.lfoR._phase = newPhase;
            }
        }
    });
    Tuna.prototype.Tremolo = function (properties) {
        if (!properties) {
            properties = this.getDefaults();
        }
        this.input = userContext.createGain();
        this.splitter = this.activateNode = userContext.createChannelSplitter(2), this.amplitudeL = userContext.createGain(), this.amplitudeR = userContext.createGain(), this.merger = userContext.createChannelMerger(2), this.output = userContext.createGain();
        this.lfoL = new userInstance.LFO({
            target: this.amplitudeL.gain,
            callback: pipe
        });
        this.lfoR = new userInstance.LFO({
            target: this.amplitudeR.gain,
            callback: pipe
        });

        this.input.connect(this.splitter);
        this.splitter.connect(this.amplitudeL, 0);
        this.splitter.connect(this.amplitudeR, 1);
        this.amplitudeL.connect(this.merger, 0, 0);
        this.amplitudeR.connect(this.merger, 0, 1);
        this.merger.connect(this.output);

        this.rate = properties.rate || this.defaults.rate.value;
        this.intensity = properties.intensity || this.defaults.intensity.value;
        this.stereoPhase = properties.stereoPhase || this.defaults.stereoPhase.value;

        this.lfoL.offset = 1 - (this.intensity / 2);
        this.lfoR.offset = 1 - (this.intensity / 2);
        this.lfoL.phase = this.stereoPhase * Math.PI / 180;

        this.lfoL.activate(true);
        this.lfoR.activate(true);
        this.bypass = properties.bypass || false;
    };
    Tuna.prototype.Tremolo.prototype = Object.create(Super, {
        name: {
            value: "Tremolo"
        },
        defaults: {
            writable:true,
            value: {
                intensity: {
                    value: 0.3,
                    min: 0,
                    max: 1,
                    automatable: false,
                },
                stereoPhase: {
                    value: 0,
                    min: 0,
                    max: 180,
                    automatable: false,
                },
                rate: {
                    value: 5,
                    min: 0.1,
                    max: 11,
                    automatable: false,
                }
            }
        },
        intensity: {
            enumerable: true,
            get: function () {
                return this._intensity;
            },
            set: function (value) {
                this._intensity = value;
                this.lfoL.offset = 1 - this._intensity / 2;
                this.lfoR.offset = 1 - this._intensity / 2;
                this.lfoL.oscillation = this._intensity;
                this.lfoR.oscillation = this._intensity;
            }
        },
        rate: {
            enumerable: true,
            get: function () {
                return this._rate;
            },
            set: function (value) {
                this._rate = value;
                this.lfoL.frequency = this._rate;
                this.lfoR.frequency = this._rate;
            }
        },
        stereoPhase: {
            enumerable: true,
            get: function () {
                return this._rate;
            },
            set: function (value) {
                this._stereoPhase = value;
                var newPhase = this.lfoL._phase + this._stereoPhase * Math.PI / 180;
                newPhase = fmod(newPhase, 2 * Math.PI);
                this.lfoR.phase = newPhase;
            }
        }
    });
    Tuna.prototype.WahWah = function (properties) {
        if (!properties) {
            properties = this.getDefaults();
        }
        this.input = userContext.createGain();
        this.activateNode = userContext.createGain();
        this.envelopeFollower = new userInstance.EnvelopeFollower({
            target: this,
            callback: function (context, value) {
                context.sweep = value;
            }
        });
        this.filterBp = userContext.createBiquadFilter();
        this.filterPeaking = userContext.createBiquadFilter();
        this.output = userContext.createGain();

        //Connect AudioNodes
        this.activateNode.connect(this.filterBp);
        this.filterBp.connect(this.filterPeaking);
        this.filterPeaking.connect(this.output);

        //Set Properties
        this.init();
        this.automode = properties.enableAutoMode || this.defaults.automode.value;
        this.resonance = properties.resonance || this.defaults.resonance.value;
        this.sensitivity = properties.sensitivity || this.defaults.sensitivity.value;
        this.baseFrequency = properties.baseFrequency || this.defaults.baseFrequency.value;
        this.excursionOctaves = properties.excursionOctaves || this.defaults.excursionOctaves.value;
        this.sweep = properties.sweep || this.defaults.sweep.value;

        this.activateNode.gain.value = 2;
        this.envelopeFollower.activate(true);
        this.bypass = properties.bypass || false;
    };
    Tuna.prototype.WahWah.prototype = Object.create(Super, {
        name: {
            value: "WahWah"
        },
        defaults: {
            writable:true,
            value: {
                automode: {
                    value: true,
                    automatable: false,
                    type: BOOLEAN
                },
                baseFrequency: {
                    value: 0.5,
                    min: 0,
                    max: 1,
                    automatable: false,
                },
                excursionOctaves: {
                    value: 2,
                    min: 1,
                    max: 6,
                    automatable: false,
                },
                sweep: {
                    value: 0.2,
                    min: 0,
                    max: 1,
                    automatable: false,
                },
                resonance: {
                    value: 10,
                    min: 1,
                    max: 100,
                    automatable: false,
                },
                sensitivity: {
                    value: 0.5,
                    min: -1,
                    max: 1,
                    automatable: false,
                }
            }
        },
        activateCallback: {
            value: function (value) {
                this.automode = value;
            }
        },
        automode: {
            get: function () {
                return this._automode;
            },
            set: function (value) {
                this._automode = value;
                if (value) {
                    this.activateNode.connect(this.envelopeFollower.input);
                    this.envelopeFollower.activate(true);
                } else {
                    this.envelopeFollower.activate(false);
                    this.activateNode.disconnect();
                    this.activateNode.connect(this.filterBp);
                }
            }
        },
        sweep: {
            enumerable: true,
            get: function () {
                return this._sweep.value;
            },
            set: function (value) {
                this._sweep = Math.pow(value > 1 ? 1 : value < 0 ? 0 : value, this._sensitivity);
                this.filterBp.frequency.value = this._baseFrequency + this._excursionFrequency * this._sweep;
                this.filterPeaking.frequency.value = this._baseFrequency + this._excursionFrequency * this._sweep;
            }
        },
        baseFrequency: {
            enumerable: true,
            get: function () {
                return this._baseFrequency;
            },
            set: function (value) {
                this._baseFrequency = 50 * Math.pow(10, value * 2);
                this._excursionFrequency = Math.min(this.sampleRate / 2, this.baseFrequency * Math.pow(2, this._excursionOctaves));
                this.filterBp.frequency.value = this._baseFrequency + this._excursionFrequency * this._sweep;
                this.filterPeaking.frequency.value = this._baseFrequency + this._excursionFrequency * this._sweep;
            }
        },
        excursionOctaves: {
            enumerable: true,
            get: function () {
                return this._excursionOctaves;
            },
            set: function (value) {
                this._excursionOctaves = value;
                this._excursionFrequency = Math.min(this.sampleRate / 2, this.baseFrequency * Math.pow(2, this._excursionOctaves));
                this.filterBp.frequency.value = this._baseFrequency + this._excursionFrequency * this._sweep;
                this.filterPeaking.frequency.value = this._baseFrequency + this._excursionFrequency * this._sweep;
            }
        },
        sensitivity: {
            enumerable: true,
            get: function () {
                return this._sensitivity;
            },
            set: function (value) {
                this._sensitivity = Math.pow(10, value);
            }
        },
        resonance: {
            enumerable: true,
            get: function () {
                return this._resonance;
            },
            set: function (value) {
                this._resonance = value;
                this.filterPeaking.Q = this._resonance;
            }
        },
        init: {
            value: function () {
                this.output.gain.value = 1;
                this.filterPeaking.type = 5;
                this.filterBp.type = 2;
                this.filterPeaking.frequency.value = 100;
                this.filterPeaking.gain.value = 20;
                this.filterPeaking.Q.value = 5;
                this.filterBp.frequency.value = 100;
                this.filterBp.Q.value = 1;
                this.sampleRate = userContext.sampleRate;
            }
        }
    });
    Tuna.prototype.EnvelopeFollower = function (properties) {
        if (!properties) {
            properties = this.getDefaults();
        }
        this.input = userContext.createGain();
        this.jsNode = this.output = userContext.createScriptProcessor(this.buffersize, 1, 1);

        this.input.connect(this.output);

        this.attackTime = properties.attackTime || this.defaults.attackTime.value;
        this.releaseTime = properties.releaseTime || this.defaults.releaseTime.value;
        this._envelope = 0;
        this.target = properties.target || {};
        this.callback = properties.callback || function () {};
    };
    Tuna.prototype.EnvelopeFollower.prototype = Object.create(Super, {
        name: {
            value: "EnvelopeFollower"
        },
        defaults: {
            value: {
                attackTime: {
                    value: 0.003,
                    min: 0,
                    max: 0.5,
                    automatable: false,
                },
                releaseTime: {
                    value: 0.5,
                    min: 0,
                    max: 0.5,
                    automatable: false,
                }
            }
        },
        buffersize: {
            value: 256
        },
        envelope: {
            value: 0
        },
        sampleRate: {
            value: 44100
        },
        attackTime: {
            enumerable: true,
            get: function () {
                return this._attackTime;
            },
            set: function (value) {
                this._attackTime = value;
                this._attackC = Math.exp(-1 / this._attackTime * this.sampleRate / this.buffersize);
            }
        },
        releaseTime: {
            enumerable: true,
            get: function () {
                return this._releaseTime;
            },
            set: function (value) {
                this._releaseTime = value;
                this._releaseC = Math.exp(-1 / this._releaseTime * this.sampleRate / this.buffersize);
            }
        },
        callback: {
            get: function () {
                return this._callback;
            },
            set: function (value) {
                if (typeof value === "function") {
                    this._callback = value;
                } else {
                    console.error("tuna.js: " + this.name + ": Callback must be a function!");
                }
            }
        },
        target: {
            get: function () {
                return this._target;
            },
            set: function (value) {
                this._target = value;
            }
        },
        activate: {
            value: function (doActivate) {
                this.activated = doActivate;
                if (doActivate) {
                    this.jsNode.connect(userContext.destination);
                    this.jsNode.onaudioprocess = this.returnCompute(this);
                } else {
                    this.jsNode.disconnect();
                    this.jsNode.onaudioprocess = null;
                }
            }
        },
        returnCompute: {
            value: function (instance) {
                return function (event) {
                    instance.compute(event);
                };
            }
        },
        compute: {
            value: function (event) {
                var count = event.inputBuffer.getChannelData(0).length,
                    channels = event.inputBuffer.numberOfChannels,
                    current, chan, rms, i;
                chan = rms = i = 0;
                if (channels > 1) { //need to mixdown
                    for(i = 0; i < count; ++i) {
                        for(; chan < channels; ++chan) {
                            current = event.inputBuffer.getChannelData(chan)[i];
                            rms += (current * current) / channels;
                        }
                    }
                } else {
                    for(i = 0; i < count; ++i) {
                        current = event.inputBuffer.getChannelData(0)[i];
                        rms += (current * current);
                    }
                }
                rms = Math.sqrt(rms);

                if (this._envelope < rms) {
                    this._envelope *= this._attackC;
                    this._envelope += (1 - this._attackC) * rms;
                } else {
                    this._envelope *= this._releaseC;
                    this._envelope += (1 - this._releaseC) * rms;
                }
                this._callback(this._target, this._envelope);
            }
        }
    });
    
    // Low-frequency oscillation
    Tuna.prototype.LFO = function (properties) {
        //Instantiate AudioNode
        this.output = userContext.createScriptProcessor(256, 1, 1);
        this.activateNode = userContext.destination;

        //Set Properties
        this.frequency = properties.frequency || this.defaults.frequency.value;
        this.offset = properties.offset || this.defaults.offset.value;
        this.oscillation = properties.oscillation || this.defaults.oscillation.value;
        this.phase = properties.phase || this.defaults.phase.value;
        this.target = properties.target || {};
        this.output.onaudioprocess = this.callback(properties.callback || function () {});
        this.bypass = properties.bypass || false;
    };
    Tuna.prototype.LFO.prototype = Object.create(Super, {
        name: {
            value: "LFO"
        },
        bufferSize: {
            value: 256
        },
        sampleRate: {
            value: 44100
        },
        defaults: {
            value: {
                frequency: {
                    value: 1,
                    min: 0,
                    max: 20,
                    automatable: false,
                },
                offset: {
                    value: 0.85,
                    min: 0,
                    max: 22049,
                    automatable: false,
                },
                oscillation: {
                    value: 0.3,
                    min: -22050,
                    max: 22050,
                    automatable: false,
                },
                phase: {
                    value: 0,
                    min: 0,
                    max: 2 * Math.PI,
                    automatable: false,
                }
            }
        },
        frequency: {
            get: function () {
                return this._frequency;
            },
            set: function (value) {
                this._frequency = value;
                this._phaseInc = 2 * Math.PI * this._frequency * this.bufferSize / this.sampleRate;
            }
        },
        offset: {
            get: function () {
                return this._offset;
            },
            set: function (value) {
                this._offset = value;
            }
        },
        oscillation: {
            get: function () {
                return this._oscillation;
            },
            set: function (value) {
                this._oscillation = value;
            }
        },
        phase: {
            get: function () {
                return this._phase;
            },
            set: function (value) {
                this._phase = value;
            }
        },
        target: {
            get: function () {
                return this._target;
            },
            set: function (value) {
                this._target = value;
            }
        },
        activate: {
            value: function (doActivate) {
                if (!doActivate) {
                    this.output.disconnect(userContext.destination);
                } else {
                    this.output.connect(userContext.destination);
                }
            }
        },
        callback: {
            value: function (callback) {
                var that = this;
                return function () {
                    that._phase += that._phaseInc;
                    if (that._phase > 2 * Math.PI) {
                        that._phase = 0;
                    }
                    callback(that._target, that._offset + that._oscillation * Math.sin(that._phase));
                };
            }
        }
    });

	/* Panner 
	------------------------------------------------*/
    Tuna.prototype.Panner = function (properties) {
        if (!properties) {
            properties = this.getDefaults();
        }
        this.input = userContext.createGain();
        this.activateNode = userContext.createGain();
        this.output = userContext.createGain();
		this.panner = userContext.createPanner();

        this.activateNode.connect(this.panner);
		this.panner.connect(this.output);

        this.bypass = properties.bypass || false;
        this.x = properties.x || 0;
        this.y = properties.y || 1;
        this.z = properties.z || 1;
        this.panningModel = properties.panningModel || 0;
        this.distanceModel = properties.distanceModel || 0;
    };

	var PannerPosition = function(type) {
		return {
            enumerable: true,
            get: function () {
                return this["_" + type];
            },
            set: function (value) {
                this["_" + type] = value;
				this.panner.setPosition(this._x || 0, this._y || 0, this._z || 0);
            }
        }
	};
	
	var PannerModel = function(type) {
		return {
            enumerable: true,
            get: function () {
                return this["_" + type];
            },
            set: function (value) {
                this["_" + type] = value;
				this.panner[type] = value;
            }
        }
	};
	
	var Clamp = function(value, min, max, automatable) {
		return {
			value: value,
			min: min,
			max: max,
			automatable: automatable
		};
	};
	
    Tuna.prototype.Panner.prototype = Object.create(Super, {
        name: {
            value: "Panner"
        },
        defaults: {
            writable:true,
            value: {
                x: Clamp(0, -20, 20, false),
                y: Clamp(0, -20, 20, false),
                z: Clamp(0, -20, 20, false),
                distanceModel: Clamp(0, 0, 2, false),
                panningModel: Clamp(0, 0, 2, false)
            }
        },
        x: PannerPosition("x"),
        y: PannerPosition("y"),
        z: PannerPosition("z"),
        panningModel: PannerModel("panningModel"),
        distanceModel: PannerModel("distanceModel")
    });

	/* Volume 
	------------------------------------------------*/
    Tuna.prototype.Volume = function (properties) {
        if (!properties) {
            properties = this.getDefaults();
        }

        this.input = userContext.createGain();
        this.activateNode = userContext.createGain();
        this.output = userContext.createGain();

        this.activateNode.connect(this.output);

        this.bypass = properties.bypass || false;
        this.amount = properties.amount || this.defaults.amount.value;
    };

    Tuna.prototype.Volume.prototype = Object.create(Super, {
        name: {
            value: "Volume"
        },
        defaults: {
            writable:true,
            value: {
                amount: Clamp(0, 0, 2, false)
            }
        },
        amount: {
            enumerable: true,
            get: function () {
                return this._volume;
            },
            set: function (value) {
                this._volume = value;
                this.activateNode.gain.value = value;
            }
        }
    });

	/* Frequency 
	------------------------------------------------*/
    Tuna.prototype.Frequency = function (properties) {
        if (!properties) {
            properties = this.getDefaults();
        }

		this.trebleFilter = userContext.createBiquadFilter();
		this.trebleFilter.type = this.trebleFilter.HIGHSHELF;
		this.trebleFilter.frequency.value = 8000; // 1k+
		this.trebleFilter.Q.value = 0;
		this.midtoneFilter = userContext.createBiquadFilter();
		this.midtoneFilter.type = this.midtoneFilter.PEAKING;
		this.midtoneFilter.frequency.value = 1000; // 200-1k
		this.midtoneFilter.Q.value = 0;
		this.bassFilter = userContext.createBiquadFilter();
		this.bassFilter.type = this.bassFilter.LOWSHELF;
		this.bassFilter.frequency.value = 200; // 60-200k
		this.bassFilter.Q.value = 0;
		
        this.input = userContext.createGain();
        this.activateNode = userContext.createGain();
        this.output = userContext.createGain();

		this.activateNode.connect(this.bassFilter);
		this.bassFilter.connect(this.midtoneFilter);
		this.midtoneFilter.connect(this.trebleFilter);
        this.trebleFilter.connect(this.output);

        this.bypass = properties.bypass || false;
        this.volume = properties.volume || false;
        this.treble = properties.treble || false;
        this.midtone = properties.midtone || false;
        this.bass = properties.bass || false;
    };

    var GainValue = function(type, nodeId) {
    	return {
            enumerable: true,
            get: function () {
                return this["_" + type];
            },
            set: function (value) {
                this["_" + type] = value;
                this[nodeId || type + "Filter"].gain.value = value;
            }
        };
    };

    Tuna.prototype.Frequency.prototype = Object.create(Super, {
        name: {
            value: "Frequency"
        },
        defaults: {
            writable:true,
            value: {
            	volume: Clamp(1, 0, 2, false),
                treble: Clamp(0, -20, 20, false),
                midtone: Clamp(0, -20, 20, false),
                bass: Clamp(0, -20, 20, false)
            }
        },
        volume: GainValue("volume", "activateNode"),
        treble: GainValue("treble"),
        midtone: GainValue("midtone"),
        bass: GainValue("bass")
    });

    if (typeof define === "function") {
        define("Tuna", [], function () {
            return Tuna;
        });
    } else {
        window.Tuna = Tuna;
    }
})(this);/*
	----------------------------------------------------------
	MIDI.audioDetect : 0.3.2 : 2015-03-26
	----------------------------------------------------------
	https://github.com/mudcube/MIDI.js
	----------------------------------------------------------
	Probably, Maybe, No... Absolutely!
	Test to see what types of <audio> MIME types are playable by the browser.
	----------------------------------------------------------
*/

if (typeof MIDI === 'undefined') MIDI = {};

(function(root) { 'use strict';

	var supports = {}; // object of supported file types
	var pending = 0; // pending file types to process
	var canPlayThrough = function (src) { // check whether format plays through
		pending ++;
		var body = document.body;
		var audio = new Audio();
		var mime = src.split(';')[0];
		audio.id = 'audio';
		audio.setAttribute('preload', 'auto');
		audio.setAttribute('audiobuffer', true);
		audio.addEventListener('error', function() {
			body.removeChild(audio);
			supports[mime] = false;
			pending --;
		}, false);
		audio.addEventListener('canplaythrough', function() {
			body.removeChild(audio);
			supports[mime] = true;
			pending --;
		}, false);
		audio.src = 'data:' + src;
		body.appendChild(audio);
	};

	root.audioDetect = function(onsuccess) {
		/// detect jazz-midi plugin
		if (navigator.requestMIDIAccess) {
			var isNative = Function.prototype.toString.call(navigator.requestMIDIAccess).indexOf('[native code]');
			if (isNative) { // has native midiapi support
				supports['webmidi'] = true;
			} else { // check for jazz plugin midiapi support
				for (var n = 0; navigator.plugins.length > n; n ++) {
					var plugin = navigator.plugins[n];
					if (plugin.name.indexOf('Jazz-Plugin') >= 0) {
						supports['webmidi'] = true;
					}
				}
			}
		}

		/// check whether <audio> tag is supported
		if (typeof(Audio) === 'undefined') {
			return onsuccess({});
		} else {
			supports['audiotag'] = true;
		}

		/// check for webaudio api support
		if (window.AudioContext || window.webkitAudioContext) {
			supports['webaudio'] = true;
		}

		/// check whether canPlayType is supported
		var audio = new Audio();
		if (typeof(audio.canPlayType) === 'undefined') {
			return onsuccess(supports);
		}

		/// see what we can learn from the browser
		var vorbis = audio.canPlayType('audio/ogg; codecs="vorbis"');
		vorbis = (vorbis === 'probably' || vorbis === 'maybe');
		var mpeg = audio.canPlayType('audio/mpeg');
		mpeg = (mpeg === 'probably' || mpeg === 'maybe');
		// maybe nothing is supported
		if (!vorbis && !mpeg) {
			onsuccess(supports);
			return;
		}

		/// or maybe something is supported
		if (vorbis) canPlayThrough('audio/ogg;base64,T2dnUwACAAAAAAAAAADqnjMlAAAAAOyyzPIBHgF2b3JiaXMAAAAAAUAfAABAHwAAQB8AAEAfAACZAU9nZ1MAAAAAAAAAAAAA6p4zJQEAAAANJGeqCj3//////////5ADdm9yYmlzLQAAAFhpcGguT3JnIGxpYlZvcmJpcyBJIDIwMTAxMTAxIChTY2hhdWZlbnVnZ2V0KQAAAAABBXZvcmJpcw9CQ1YBAAABAAxSFCElGVNKYwiVUlIpBR1jUFtHHWPUOUYhZBBTiEkZpXtPKpVYSsgRUlgpRR1TTFNJlVKWKUUdYxRTSCFT1jFloXMUS4ZJCSVsTa50FkvomWOWMUYdY85aSp1j1jFFHWNSUkmhcxg6ZiVkFDpGxehifDA6laJCKL7H3lLpLYWKW4q91xpT6y2EGEtpwQhhc+211dxKasUYY4wxxsXiUyiC0JBVAAABAABABAFCQ1YBAAoAAMJQDEVRgNCQVQBABgCAABRFcRTHcRxHkiTLAkJDVgEAQAAAAgAAKI7hKJIjSZJkWZZlWZameZaouaov+64u667t6roOhIasBACAAAAYRqF1TCqDEEPKQ4QUY9AzoxBDDEzGHGNONKQMMogzxZAyiFssLqgQBKEhKwKAKAAAwBjEGGIMOeekZFIi55iUTkoDnaPUUcoolRRLjBmlEluJMYLOUeooZZRCjKXFjFKJscRUAABAgAMAQICFUGjIigAgCgCAMAYphZRCjCnmFHOIMeUcgwwxxiBkzinoGJNOSuWck85JiRhjzjEHlXNOSuekctBJyaQTAAAQ4AAAEGAhFBqyIgCIEwAwSJKmWZomipamiaJniqrqiaKqWp5nmp5pqqpnmqpqqqrrmqrqypbnmaZnmqrqmaaqiqbquqaquq6nqrZsuqoum65q267s+rZru77uqapsm6or66bqyrrqyrbuurbtS56nqqKquq5nqq6ruq5uq65r25pqyq6purJtuq4tu7Js664s67pmqq5suqotm64s667s2rYqy7ovuq5uq7Ks+6os+75s67ru2rrwi65r66os674qy74x27bwy7ouHJMnqqqnqq7rmarrqq5r26rr2rqmmq5suq4tm6or26os67Yry7aumaosm64r26bryrIqy77vyrJui67r66Ys67oqy8Lu6roxzLat+6Lr6roqy7qvyrKuu7ru+7JuC7umqrpuyrKvm7Ks+7auC8us27oxuq7vq7It/KosC7+u+8Iy6z5jdF1fV21ZGFbZ9n3d95Vj1nVhWW1b+V1bZ7y+bgy7bvzKrQvLstq2scy6rSyvrxvDLux8W/iVmqratum6um7Ksq/Lui60dd1XRtf1fdW2fV+VZd+3hV9pG8OwjK6r+6os68Jry8ov67qw7MIvLKttK7+r68ow27qw3L6wLL/uC8uq277v6rrStXVluX2fsSu38QsAABhwAAAIMKEMFBqyIgCIEwBAEHIOKQahYgpCCKGkEEIqFWNSMuakZM5JKaWUFEpJrWJMSuaclMwxKaGUlkopqYRSWiqlxBRKaS2l1mJKqcVQSmulpNZKSa2llGJMrcUYMSYlc05K5pyUklJrJZXWMucoZQ5K6iCklEoqraTUYuacpA46Kx2E1EoqMZWUYgupxFZKaq2kFGMrMdXUWo4hpRhLSrGVlFptMdXWWqs1YkxK5pyUzDkqJaXWSiqtZc5J6iC01DkoqaTUYiopxco5SR2ElDLIqJSUWiupxBJSia20FGMpqcXUYq4pxRZDSS2WlFosqcTWYoy1tVRTJ6XFklKMJZUYW6y5ttZqDKXEVkqLsaSUW2sx1xZjjqGkFksrsZWUWmy15dhayzW1VGNKrdYWY40x5ZRrrT2n1mJNMdXaWqy51ZZbzLXnTkprpZQWS0oxttZijTHmHEppraQUWykpxtZara3FXEMpsZXSWiypxNhirLXFVmNqrcYWW62ltVprrb3GVlsurdXcYqw9tZRrrLXmWFNtBQAADDgAAASYUAYKDVkJAEQBAADGMMYYhEYpx5yT0ijlnHNSKucghJBS5hyEEFLKnINQSkuZcxBKSSmUklJqrYVSUmqttQIAAAocAAACbNCUWByg0JCVAEAqAIDBcTRNFFXVdX1fsSxRVFXXlW3jVyxNFFVVdm1b+DVRVFXXtW3bFn5NFFVVdmXZtoWiqrqybduybgvDqKqua9uybeuorqvbuq3bui9UXVmWbVu3dR3XtnXd9nVd+Bmzbeu2buu+8CMMR9/4IeTj+3RCCAAAT3AAACqwYXWEk6KxwEJDVgIAGQAAgDFKGYUYM0gxphhjTDHGmAAAgAEHAIAAE8pAoSErAoAoAADAOeecc84555xzzjnnnHPOOeecc44xxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY0wAwE6EA8BOhIVQaMhKACAcAABACCEpKaWUUkoRU85BSSmllFKqFIOMSkoppZRSpBR1lFJKKaWUIqWgpJJSSimllElJKaWUUkoppYw6SimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaVUSimllFJKKaWUUkoppRQAYPLgAACVYOMMK0lnhaPBhYasBAByAwAAhRiDEEJpraRUUkolVc5BKCWUlEpKKZWUUqqYgxBKKqmlklJKKbXSQSihlFBKKSWUUkooJYQQSgmhlFRCK6mEUkoHoYQSQimhhFRKKSWUzkEoIYUOQkmllNRCSB10VFIpIZVSSiklpZQ6CKGUklJLLZVSWkqpdBJSKamV1FJqqbWSUgmhpFZKSSWl0lpJJbUSSkklpZRSSymFVFJJJYSSUioltZZaSqm11lJIqZWUUkqppdRSSiWlkEpKqZSSUmollZRSaiGVlEpJKaTUSimlpFRCSamlUlpKLbWUSkmptFRSSaWUlEpJKaVSSksppRJKSqmllFpJKYWSUkoplZJSSyW1VEoKJaWUUkmptJRSSymVklIBAEAHDgAAAUZUWoidZlx5BI4oZJiAAgAAQABAgAkgMEBQMApBgDACAQAAAADAAAAfAABHARAR0ZzBAUKCwgJDg8MDAAAAAAAAAAAAAACAT2dnUwAEAAAAAAAAAADqnjMlAgAAADzQPmcBAQA=');
		if (mpeg) canPlayThrough('audio/mpeg;base64,/+MYxAAAAANIAUAAAASEEB/jwOFM/0MM/90b/+RhST//w4NFwOjf///PZu////9lns5GFDv//l9GlUIEEIAAAgIg8Ir/JGq3/+MYxDsLIj5QMYcoAP0dv9HIjUcH//yYSg+CIbkGP//8w0bLVjUP///3Z0x5QCAv/yLjwtGKTEFNRTMuOTeqqqqqqqqqqqqq/+MYxEkNmdJkUYc4AKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq');

		/// lets find out!
		var time = (new Date()).getTime(); 
		var interval = window.setInterval(function() {
			var now = (new Date()).getTime();
			var maxExecution = now - time > 5000;
			if (!pending || maxExecution) {
				window.clearInterval(interval);
				onsuccess(supports);
			}
		}, 1);
	};

})(MIDI);/*
	----------------------------------------------------------
	GeneralMIDI
	----------------------------------------------------------
*/

(function(root) { 'use strict';

	root.GM = (function(arr) {
		var clean = function(name) {
			return name.replace(/[^a-z0-9 ]/gi, '').replace(/[ ]/g, '_').toLowerCase();
		};
		var res = {
			byName: { },
			byId: { },
			byCategory: { }
		};
		for (var key in arr) {
			var list = arr[key];
			for (var n = 0, length = list.length; n < length; n++) {
				var instrument = list[n];
				if (!instrument) continue;
				var num = parseInt(instrument.substr(0, instrument.indexOf(' ')), 10);
				instrument = instrument.replace(num + ' ', '');
				res.byId[--num] = 
				res.byName[clean(instrument)] = 
				res.byCategory[clean(key)] = {
					id: clean(instrument),
					instrument: instrument,
					number: num,
					category: key
				};
			}
		}
		return res;
	})({
		'Piano': ['1 Acoustic Grand Piano', '2 Bright Acoustic Piano', '3 Electric Grand Piano', '4 Honky-tonk Piano', '5 Electric Piano 1', '6 Electric Piano 2', '7 Harpsichord', '8 Clavinet'],
		'Chromatic Percussion': ['9 Celesta', '10 Glockenspiel', '11 Music Box', '12 Vibraphone', '13 Marimba', '14 Xylophone', '15 Tubular Bells', '16 Dulcimer'],
		'Organ': ['17 Drawbar Organ', '18 Percussive Organ', '19 Rock Organ', '20 Church Organ', '21 Reed Organ', '22 Accordion', '23 Harmonica', '24 Tango Accordion'],
		'Guitar': ['25 Acoustic Guitar (nylon)', '26 Acoustic Guitar (steel)', '27 Electric Guitar (jazz)', '28 Electric Guitar (clean)', '29 Electric Guitar (muted)', '30 Overdriven Guitar', '31 Distortion Guitar', '32 Guitar Harmonics'],
		'Bass': ['33 Acoustic Bass', '34 Electric Bass (finger)', '35 Electric Bass (pick)', '36 Fretless Bass', '37 Slap Bass 1', '38 Slap Bass 2', '39 Synth Bass 1', '40 Synth Bass 2'],
		'Strings': ['41 Violin', '42 Viola', '43 Cello', '44 Contrabass', '45 Tremolo Strings', '46 Pizzicato Strings', '47 Orchestral Harp', '48 Timpani'],
		'Ensemble': ['49 String Ensemble 1', '50 String Ensemble 2', '51 Synth Strings 1', '52 Synth Strings 2', '53 Choir Aahs', '54 Voice Oohs', '55 Synth Choir', '56 Orchestra Hit'],
		'Brass': ['57 Trumpet', '58 Trombone', '59 Tuba', '60 Muted Trumpet', '61 French Horn', '62 Brass Section', '63 Synth Brass 1', '64 Synth Brass 2'],
		'Reed': ['65 Soprano Sax', '66 Alto Sax', '67 Tenor Sax', '68 Baritone Sax', '69 Oboe', '70 English Horn', '71 Bassoon', '72 Clarinet'],
		'Pipe': ['73 Piccolo', '74 Flute', '75 Recorder', '76 Pan Flute', '77 Blown Bottle', '78 Shakuhachi', '79 Whistle', '80 Ocarina'],
		'Synth Lead': ['81 Lead 1 (square)', '82 Lead 2 (sawtooth)', '83 Lead 3 (calliope)', '84 Lead 4 (chiff)', '85 Lead 5 (charang)', '86 Lead 6 (voice)', '87 Lead 7 (fifths)', '88 Lead 8 (bass + lead)'],
		'Synth Pad': ['89 Pad 1 (new age)', '90 Pad 2 (warm)', '91 Pad 3 (polysynth)', '92 Pad 4 (choir)', '93 Pad 5 (bowed)', '94 Pad 6 (metallic)', '95 Pad 7 (halo)', '96 Pad 8 (sweep)'],
		'Synth Effects': ['97 FX 1 (rain)', '98 FX 2 (soundtrack)', '99 FX 3 (crystal)', '100 FX 4 (atmosphere)', '101 FX 5 (brightness)', '102 FX 6 (goblins)', '103 FX 7 (echoes)', '104 FX 8 (sci-fi)'],
		'Ethnic': ['105 Sitar', '106 Banjo', '107 Shamisen', '108 Koto', '109 Kalimba', '110 Bagpipe', '111 Fiddle', '112 Shanai'],
		'Percussive': ['113 Tinkle Bell', '114 Agogo', '115 Steel Drums', '116 Woodblock', '117 Taiko Drum', '118 Melodic Tom', '119 Synth Drum'],
		'Sound effects': ['120 Reverse Cymbal', '121 Guitar Fret Noise', '122 Breath Noise', '123 Seashore', '124 Bird Tweet', '125 Telephone Ring', '126 Helicopter', '127 Applause', '128 Gunshot']
	});

	/* get/setInstrument
	--------------------------------------------------- */
	root.getInstrument = function(channelId) {
		var channel = root.channels[channelId];
		return channel && channel.instrument;
	};

	root.setInstrument = function(channelId, program, delay) {
		var channel = root.channels[channelId];
		if (delay) {
			return setTimeout(function() {
				channel.instrument = program;
			}, delay);
		} else {
			channel.instrument = program;
		}
	};

	/* get/setMono
	--------------------------------------------------- */
	root.getMono = function(channelId) {
		var channel = root.channels[channelId];
		return channel && channel.mono;
	};

	root.setMono = function(channelId, truthy, delay) {
		var channel = root.channels[channelId];
		if (delay) {
			return setTimeout(function() {
				channel.mono = truthy;
			}, delay);
		} else {
			channel.mono = truthy;
		}
	};

	/* get/setOmni
	--------------------------------------------------- */
	root.getOmni = function(channelId) {
		var channel = root.channels[channelId];
		return channel && channel.omni;
	};

	root.setOmni = function(channelId, truthy) {
		var channel = root.channels[channelId];
		if (delay) {
			return setTimeout(function() {
				channel.omni = truthy;	
			}, delay);
		} else {
			channel.omni = truthy;
		}
	};

	/* get/setSolo
	--------------------------------------------------- */
	root.getSolo = function(channelId) {
		var channel = root.channels[channelId];
		return channel && channel.solo;
	};

	root.setSolo = function(channelId, truthy) {
		var channel = root.channels[channelId];
		if (delay) {
			return setTimeout(function() {
				channel.solo = truthy;	
			}, delay);
		} else {
			channel.solo = truthy;
		}
	};

	/* channels
	--------------------------------------------------- */
	root.channels = (function() { // 0 - 15 channels
		var channels = {};
		for (var i = 0; i < 16; i++) {
			channels[i] = { // default values
				instrument: i,
				pitchBend: 0,
				mute: false,
				mono: false,
				omni: false,
				solo: false
			};
		}
		return channels;
	})();

	/* note conversions
	--------------------------------------------------- */
	root.keyToNote = {}; // C8  == 108
	root.noteToKey = {}; // 108 ==  C8

	(function() {
		var A0 = 0x15; // first note
		var C8 = 0x6C; // last note
		var number2key = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
		for (var n = A0; n <= C8; n++) {
			var octave = (n - 12) / 12 >> 0;
			var name = number2key[n % 12] + octave;
			root.keyToNote[name] = n;
			root.noteToKey[n] = name;
		}
	})();

})(MIDI);/*
	----------------------------------------------------------
	MIDI.Plugin : 0.3.4 : 2015-03-26
	----------------------------------------------------------
	https://github.com/mudcube/MIDI.js
	----------------------------------------------------------
	Inspired by javax.sound.midi (albeit a super simple version): 
		http://docs.oracle.com/javase/6/docs/api/javax/sound/midi/package-summary.html
	----------------------------------------------------------
	Technologies
	----------------------------------------------------------
		Web MIDI API - no native support yet (jazzplugin)
		Web Audio API - firefox 25+, chrome 10+, safari 6+, opera 15+
		HTML5 Audio Tag - ie 9+, firefox 3.5+, chrome 4+, safari 4+, opera 9.5+, ios 4+, android 2.3+
	----------------------------------------------------------
*/

if (typeof MIDI === 'undefined') MIDI = {};

MIDI.Soundfont = MIDI.Soundfont || {};
MIDI.Player = MIDI.Player || {};

(function(root) { 'use strict';

	root.DEBUG = true;
	root.USE_XHR = true;
	root.soundfontUrl = './soundfont/';

	/*
		MIDI.loadPlugin({
			onsuccess: function() { },
			onprogress: function(state, percent) { },
			targetFormat: 'mp3', // optionally can force to use MP3 (for instance on mobile networks)
			instrument: 'acoustic_grand_piano', // or 1 (default)
			instruments: [ 'acoustic_grand_piano', 'acoustic_guitar_nylon' ] // or multiple instruments
		});
	*/

	root.loadPlugin = function(opts) {
		if (typeof opts === 'function') {
			opts = {onsuccess: opts};
		}

		root.soundfontUrl = opts.soundfontUrl || root.soundfontUrl;

		/// Detect the best type of audio to use
		root.audioDetect(function(supports) {
			var hash = window.location.hash;
			var api = '';

			/// use the most appropriate plugin if not specified
			if (supports[opts.api]) {
				api = opts.api;
			} else if (supports[hash.substr(1)]) {
				api = hash.substr(1);
			} else if (supports.webmidi) {
				api = 'webmidi';
			} else if (window.AudioContext) { // Chrome
				api = 'webaudio';
			} else if (window.Audio) { // Firefox
				api = 'audiotag';
			}

			if (connect[api]) {
				/// use audio/ogg when supported
				if (opts.targetFormat) {
					var audioFormat = opts.targetFormat;
				} else { // use best quality
					var audioFormat = supports['audio/ogg'] ? 'ogg' : 'mp3';
				}

				/// load the specified plugin
				root.__api = api;
				root.__audioFormat = audioFormat;
				root.supports = supports;
				root.loadResource(opts);
			}
		});
	};

	/*
		root.loadResource({
			onsuccess: function() { },
			onprogress: function(state, percent) { },
			instrument: 'banjo'
		})
	*/

	root.loadResource = function(opts) {
		var instruments = opts.instruments || opts.instrument || 'acoustic_grand_piano';
		///
		if (typeof instruments !== 'object') {
			if (instruments || instruments === 0) {
				instruments = [instruments];
			} else {
				instruments = [];
			}
		}
		/// convert numeric ids into strings
		for (var i = 0; i < instruments.length; i ++) {
			var instrument = instruments[i];
			if (instrument === +instrument) { // is numeric
				if (root.GM.byId[instrument]) {
					instruments[i] = root.GM.byId[instrument].id;
				}
			}
		}
		///
		opts.format = root.__audioFormat;
		opts.instruments = instruments;
		///
		connect[root.__api](opts);
	};

	var connect = {
		webmidi: function(opts) {
			// cant wait for this to be standardized!
			root.WebMIDI.connect(opts);
		},
		audiotag: function(opts) {
			// works ok, kinda like a drunken tuna fish, across the board
			// http://caniuse.com/audio
			requestQueue(opts, 'AudioTag');
		},
		webaudio: function(opts) {
			// works awesome! safari, chrome and firefox support
			// http://caniuse.com/web-audio
			requestQueue(opts, 'WebAudio');
		}
	};

	var requestQueue = function(opts, context) {
		var audioFormat = opts.format;
		var instruments = opts.instruments;
		var onprogress = opts.onprogress;
		var onerror = opts.onerror;
		///
		var length = instruments.length;
		var pending = length;
		var waitForEnd = function() {
			if (!--pending) {
				onprogress && onprogress('load', 1.0);
				root[context].connect(opts);
			}
		};
		///
		for (var i = 0; i < length; i ++) {
			var instrumentId = instruments[i];
			if (MIDI.Soundfont[instrumentId]) { // already loaded
				waitForEnd();
			} else { // needs to be requested
				sendRequest(instruments[i], audioFormat, function(evt, progress) {
					var fileProgress = progress / length;
					var queueProgress = (length - pending) / length;
					onprogress && onprogress('load', fileProgress + queueProgress, instrumentId);
				}, function() {
					waitForEnd();
				}, onerror);
			}
		};
	};

	var sendRequest = function(instrumentId, audioFormat, onprogress, onsuccess, onerror) {
		var soundfontPath = root.soundfontUrl + instrumentId + '-' + audioFormat + '.js';
		if (root.USE_XHR) {
			root.util.request({
				url: soundfontPath,
				format: 'text',
				onerror: onerror,
				onprogress: onprogress,
				onsuccess: function(event, responseText) {
					var script = document.createElement('script');
					script.language = 'javascript';
					script.type = 'text/javascript';
					script.text = responseText;
					document.body.appendChild(script);
					///
					onsuccess();
				}
			});
		} else {
			dom.loadScript.add({
				url: soundfontPath,
				verify: 'MIDI.Soundfont["' + instrumentId + '"]',
				onerror: onerror,
				onsuccess: function() {
					onsuccess();
				}
			});
		}
	};

	root.setDefaultPlugin = function(midi) {
		for (var key in midi) {
			root[key] = midi[key];
		}
	};

})(MIDI);/*
	----------------------------------------------------------------------
	AudioTag <audio> - OGG or MPEG Soundbank
	----------------------------------------------------------------------
	http://dev.w3.org/html5/spec/Overview.html#the-audio-element
	----------------------------------------------------------------------
*/

(function(root) { 'use strict';

	window.Audio && (function() {
		var midi = root.AudioTag = { api: 'audiotag' };
		var noteToKey = {};
		var volume = 127; // floating point 
		var buffer_nid = -1; // current channel
		var audioBuffers = []; // the audio channels
		var notesOn = []; // instrumentId + noteId that is currently playing in each 'channel', for routing noteOff/chordOff calls
		var notes = {}; // the piano keys
		for (var nid = 0; nid < 12; nid ++) {
			audioBuffers[nid] = new Audio();
		}

		var playChannel = function(channel, note) {
			if (!root.channels[channel]) return;
			var instrument = root.channels[channel].instrument;
			var instrumentId = root.GM.byId[instrument].id;
			var note = notes[note];
			if (note) {
				var instrumentNoteId = instrumentId + '' + note.id;
				var nid = (buffer_nid + 1) % audioBuffers.length;
				var audio = audioBuffers[nid];
				notesOn[ nid ] = instrumentNoteId;
				if (!root.Soundfont[instrumentId]) {
					if (root.DEBUG) {
						console.log('404', instrumentId);
					}
					return;
				}
				audio.src = root.Soundfont[instrumentId][note.id];
				audio.volume = volume / 127;
				audio.play();
				buffer_nid = nid;
			}
		};

		var stopChannel = function(channel, note) {
			if (!root.channels[channel]) return;
			var instrument = root.channels[channel].instrument;
			var instrumentId = root.GM.byId[instrument].id;
			var note = notes[note];
			if (note) {
				var instrumentNoteId = instrumentId + '' + note.id;
				for (var i = 0, len = audioBuffers.length; i < len; i++) {
				    var nid = (i + buffer_nid + 1) % len;
				    var cId = notesOn[nid];
				    if (cId && cId == instrumentNoteId) {
				        audioBuffers[nid].pause();
				        notesOn[nid] = null;
				        return;
				    }
				}
			}
		};
	
		midi.audioBuffers = audioBuffers;
		midi.send = function(data, delay) { };
		midi.setController = function(channel, type, value, delay) { };
		midi.setVolume = function(channel, n) {
			volume = n; //- should be channel specific volume
		};

		midi.programChange = function(channel, program) {
			root.channels[channel].instrument = program;
		};

		midi.pitchBend = function(channel, program, delay) { };

		midi.noteOn = function(channel, note, velocity, delay) {
			var id = noteToKey[note];
			if (!notes[id]) return;
			if (delay) {
				return setTimeout(function() {
					playChannel(channel, id);
				}, delay * 1000);
			} else {
				playChannel(channel, id);
			}
		};
	
		midi.noteOff = function(channel, note, delay) {
// 			var id = noteToKey[note];
// 			if (!notes[id]) return;
// 			if (delay) {
// 				return setTimeout(function() {
// 					stopChannel(channel, id);
// 				}, delay * 1000)
// 			} else {
// 				stopChannel(channel, id);
// 			}
		};
	
		midi.chordOn = function(channel, chord, velocity, delay) {
			for (var idx = 0; idx < chord.length; idx ++) {
				var n = chord[idx];
				var id = noteToKey[n];
				if (!notes[id]) continue;
				if (delay) {
					return setTimeout(function() {
						playChannel(channel, id);
					}, delay * 1000);
				} else {
					playChannel(channel, id);
				}
			}
		};
	
		midi.chordOff = function(channel, chord, delay) {
			for (var idx = 0; idx < chord.length; idx ++) {
				var n = chord[idx];
				var id = noteToKey[n];
				if (!notes[id]) continue;
				if (delay) {
					return setTimeout(function() {
						stopChannel(channel, id);
					}, delay * 1000);
				} else {
					stopChannel(channel, id);
				}
			}
		};
	
		midi.stopAllNotes = function() {
			for (var nid = 0, length = audioBuffers.length; nid < length; nid++) {
				audioBuffers[nid].pause();
			}
		};
	
		midi.connect = function(opts) {
			root.setDefaultPlugin(midi);
			///
			for (var key in root.keyToNote) {
				noteToKey[root.keyToNote[key]] = key;
				notes[key] = {id: key};
			}
			///
			opts.onsuccess && opts.onsuccess();
		};
	})();

})(MIDI);/*
	----------------------------------------------------------
	Web Audio API - OGG or MPEG Soundbank
	----------------------------------------------------------
	http://webaudio.github.io/web-audio-api/
	----------------------------------------------------------
*/

(function(root) { 'use strict';

	window.AudioContext && (function() {
		var audioContext = null; // new AudioContext();
		var useStreamingBuffer = false; // !!audioContext.createMediaElementSource;
		var midi = root.WebAudio = {api: 'webaudio'};
		var ctx; // audio context
		var sources = {};
		var effects = {};
		var masterVolume = 127;
		var audioBuffers = {};
		///
		midi.audioBuffers = audioBuffers;
		midi.send = function(data, delay) { };
		midi.setController = function(channelId, type, value, delay) { };

		midi.setVolume = function(channelId, volume, delay) {
			if (delay) {
				setTimeout(function() {
					masterVolume = volume;
				}, delay * 1000);
			} else {
				masterVolume = volume;
			}
		};

		midi.programChange = function(channelId, program, delay) {
// 			if (delay) {
// 				return setTimeout(function() {
// 					var channel = root.channels[channelId];
// 					channel.instrument = program;
// 				}, delay);
// 			} else {
				var channel = root.channels[channelId];
				channel.instrument = program;
// 			}
		};

		midi.pitchBend = function(channelId, program, delay) {
// 			if (delay) {
// 				setTimeout(function() {
// 					var channel = root.channels[channelId];
// 					channel.pitchBend = program;
// 				}, delay);
// 			} else {
				var channel = root.channels[channelId];
				channel.pitchBend = program;
// 			}
		};

		midi.noteOn = function(channelId, noteId, velocity, delay) {
			delay = delay || 0;

			/// check whether the note exists
			var channel = root.channels[channelId];
			var instrument = channel.instrument;
			var bufferId = instrument + '' + noteId;
			var buffer = audioBuffers[bufferId];
			if (!buffer) {
// 				console.log(MIDI.GM.byId[instrument].id, instrument, channelId);
				return;
			}

			/// convert relative delay to absolute delay
			if (delay < ctx.currentTime) {
				delay += ctx.currentTime;
			}
		
			/// create audio buffer
			if (useStreamingBuffer) {
				var source = ctx.createMediaElementSource(buffer);
			} else { // XMLHTTP buffer
				var source = ctx.createBufferSource();
				source.buffer = buffer;
			}

			/// add effects to buffer
			if (effects) {
				var chain = source;
				for (var key in effects) {
					chain.connect(effects[key].input);
					chain = effects[key];
				}
			}

			/// add gain + pitchShift
			var gain = (velocity / 127) * (masterVolume / 127) * 2 - 1;
			source.connect(ctx.destination);
			source.playbackRate.value = 1; // pitch shift 
			source.gainNode = ctx.createGain(); // gain
			source.gainNode.connect(ctx.destination);
			source.gainNode.gain.value = Math.min(1.0, Math.max(-1.0, gain));
			source.connect(source.gainNode);
			///
			if (useStreamingBuffer) {
				if (delay) {
					return setTimeout(function() {
						buffer.currentTime = 0;
						buffer.play()
					}, delay * 1000);
				} else {
					buffer.currentTime = 0;
					buffer.play()
				}
			} else {
				source.start(delay || 0);
			}
			///
			sources[channelId + '' + noteId] = source;
			///
			return source;
		};

		midi.noteOff = function(channelId, noteId, delay) {
			delay = delay || 0;

			/// check whether the note exists
			var channel = root.channels[channelId];
			var instrument = channel.instrument;
			var bufferId = instrument + '' + noteId;
			var buffer = audioBuffers[bufferId];
			if (buffer) {
				if (delay < ctx.currentTime) {
					delay += ctx.currentTime;
				}
				///
				var source = sources[channelId + '' + noteId];
				if (source) {
					if (source.gainNode) {
						// @Miranet: 'the values of 0.2 and 0.3 could of course be used as 
						// a 'release' parameter for ADSR like time settings.'
						// add { 'metadata': { release: 0.3 } } to soundfont files
						var gain = source.gainNode.gain;
						gain.linearRampToValueAtTime(gain.value, delay);
						gain.linearRampToValueAtTime(-1.0, delay + 0.3);
					}
					///
					if (useStreamingBuffer) {
						if (delay) {
							setTimeout(function() {
								buffer.pause();
							}, delay * 1000);
						} else {
							buffer.pause();
						}
					} else {
						if (source.noteOff) {
							source.noteOff(delay + 0.5);
						} else {
							source.stop(delay + 0.5);
						}
					}
					///
					delete sources[channelId + '' + noteId];
					///
					return source;
				}
			}
		};

		midi.chordOn = function(channel, chord, velocity, delay) {
			var res = {};
			for (var n = 0, note, len = chord.length; n < len; n++) {
				res[note = chord[n]] = midi.noteOn(channel, note, velocity, delay);
			}
			return res;
		};

		midi.chordOff = function(channel, chord, delay) {
			var res = {};
			for (var n = 0, note, len = chord.length; n < len; n++) {
				res[note = chord[n]] = midi.noteOff(channel, note, delay);
			}
			return res;
		};

		midi.stopAllNotes = function() {
			for (var sid in sources) {
				var delay = 0;
				if (delay < ctx.currentTime) {
					delay += ctx.currentTime;
				}
				var source = sources[sid];
				source.gain.linearRampToValueAtTime(1, delay);
				source.gain.linearRampToValueAtTime(0, delay + 0.3);
				if (source.noteOff) { // old api
					source.noteOff(delay + 0.3);
				} else { // new api
					source.stop(delay + 0.3);
				}
				delete sources[sid];
			}
		};

		midi.setEffects = function(list) {
			if (ctx.tunajs) {
				for (var n = 0; n < list.length; n ++) {
					var data = list[n];
					var effect = new ctx.tunajs[data.type](data);
					effect.connect(ctx.destination);
					effects[data.type] = effect;
				}
			} else {
				return console.log('Effects module not installed.');
			}
		};

		midi.connect = function(opts) {
			root.setDefaultPlugin(midi);
			midi.setContext(ctx || createAudioContext(), opts.onsuccess);
		};
	
		midi.getContext = function() {
			return ctx;
		};
	
		midi.setContext = function(newCtx, onload, onprogress, onerror) {
			ctx = newCtx;

			/// tuna.js effects module - https://github.com/Dinahmoe/tuna
			if (typeof Tuna !== 'undefined' && !ctx.tunajs) {
				ctx.tunajs = new Tuna(ctx);
			}
		
			/// loading audio files
			var urls = [];
			var notes = root.keyToNote;
			for (var key in notes) urls.push(key);
			///
			var waitForEnd = function(instrument) {
				for (var key in bufferPending) { // has pending items
					if (bufferPending[key]) return;
				}
				///
				if (onload) { // run onload once
					onload();
					onload = null;
				}
			};
			///
			var requestAudio = function(soundfont, instrumentId, index, key) {
				var url = soundfont[key];
				if (url) {
					bufferPending[instrumentId] ++;
					loadAudio(url, function(buffer) {
						buffer.id = key;
						var noteId = root.keyToNote[key];
						audioBuffers[instrumentId + '' + noteId] = buffer;
						///
						if (-- bufferPending[instrumentId] === 0) {
							var percent = index / 87;
// 							console.log(MIDI.GM.byId[instrumentId], 'processing: ', percent);
							soundfont.isLoaded = true;
							waitForEnd(instrument);
						}
					}, function(err) {
		// 				console.log(err);
					});
				}
			};
			///
			var bufferPending = {};
			for (var instrument in root.Soundfont) {
				var soundfont = root.Soundfont[instrument];
				if (soundfont.isLoaded) {
					continue;
				}
				///
				var synth = root.GM.byName[instrument];
				var instrumentId = synth.number;
				///
				bufferPending[instrumentId] = 0;
				///
				for (var index = 0; index < urls.length; index++) {
					var key = urls[index];
					requestAudio(soundfont, instrumentId, index, key);
				}
			}
			///
			setTimeout(waitForEnd, 1);
		};

		/* Load audio file: streaming | base64 | arraybuffer
		---------------------------------------------------------------------- */
		function loadAudio(url, onload, onerror) {
			if (useStreamingBuffer) {
				var audio = new Audio();
				audio.src = url;
				audio.controls = false;
				audio.autoplay = false;
				audio.preload = false;
				audio.addEventListener('canplay', function() {
					onload && onload(audio);
				});
				audio.addEventListener('error', function(err) {
					onerror && onerror(err);
				});
				document.body.appendChild(audio);
			} else if (url.indexOf('data:audio') === 0) { // Base64 string
				var base64 = url.split(',')[1];
				var buffer = Base64Binary.decodeArrayBuffer(base64);
				ctx.decodeAudioData(buffer, onload, onerror);
			} else { // XMLHTTP buffer
				var request = new XMLHttpRequest();
				request.open('GET', url, true);
				request.responseType = 'arraybuffer';
				request.onload = function() {
					ctx.decodeAudioData(request.response, onload, onerror);
				};
				request.send();
			}
		};
		
		function createAudioContext() {
			return new (window.AudioContext || window.webkitAudioContext)();
		};
	})();
})(MIDI);/*
	----------------------------------------------------------------------
	Web MIDI API - Native Soundbanks
	----------------------------------------------------------------------
	http://webaudio.github.io/web-midi-api/
	----------------------------------------------------------------------
*/

(function(root) { 'use strict';

	var plugin = null;
	var output = null;
	var channels = [];
	var midi = root.WebMIDI = {api: 'webmidi'};
	midi.send = function(data, delay) { // set channel volume
		output.send(data, delay * 1000);
	};

	midi.setController = function(channel, type, value, delay) {
		output.send([channel, type, value], delay * 1000);
	};

	midi.setVolume = function(channel, volume, delay) { // set channel volume
		output.send([0xB0 + channel, 0x07, volume], delay * 1000);
	};

	midi.programChange = function(channel, program, delay) { // change patch (instrument)
		output.send([0xC0 + channel, program], delay * 1000);
	};

	midi.pitchBend = function(channel, program, delay) { // pitch bend
		output.send([0xE0 + channel, program], delay * 1000);
	};

	midi.noteOn = function(channel, note, velocity, delay) {
		output.send([0x90 + channel, note, velocity], delay * 1000);
	};

	midi.noteOff = function(channel, note, delay) {
		output.send([0x80 + channel, note, 0], delay * 1000);
	};

	midi.chordOn = function(channel, chord, velocity, delay) {
		for (var n = 0; n < chord.length; n ++) {
			var note = chord[n];
			output.send([0x90 + channel, note, velocity], delay * 1000);
		}
	};

	midi.chordOff = function(channel, chord, delay) {
		for (var n = 0; n < chord.length; n ++) {
			var note = chord[n];
			output.send([0x80 + channel, note, 0], delay * 1000);
		}
	};

	midi.stopAllNotes = function() {
		output.cancel();
		for (var channel = 0; channel < 16; channel ++) {
			output.send([0xB0 + channel, 0x7B, 0]);
		}
	};

	midi.connect = function(opts) {
		root.setDefaultPlugin(midi);
		var errFunction = function(err) { // well at least we tried!
			if (window.AudioContext) { // Chrome
				opts.api = 'webaudio';
			} else if (window.Audio) { // Firefox
				opts.api = 'audiotag';
			} else { // no support
				return;
			}
			root.loadPlugin(opts);
		};
		///
		navigator.requestMIDIAccess().then(function(access) {
			plugin = access;
			var pluginOutputs = plugin.outputs;
			if (typeof pluginOutputs == 'function') { // Chrome pre-43
				output = pluginOutputs()[0];
			} else { // Chrome post-43
				output = pluginOutputs[0];
			}
			if (output === undefined) { // nothing there...
				errFunction();
			} else {
				opts.onsuccess && opts.onsuccess();			
			}
		}, errFunction);
	};

})(MIDI);/*
	----------------------------------------------------------
	util/Request : 0.1.1 : 2015-03-26
	----------------------------------------------------------
	util.request({
		url: './dir/something.extension',
		data: 'test!',
		format: 'text', // text | xml | json | binary
		responseType: 'text', // arraybuffer | blob | document | json | text
		headers: {},
		withCredentials: true, // true | false
		///
		onerror: function(evt, percent) {
			console.log(evt);
		},
		onsuccess: function(evt, responseText) {
			console.log(responseText);
		},
		onprogress: function(evt, percent) {
			percent = Math.round(percent * 100);
			loader.create('thread', 'loading... ', percent);
		}
	});
*/

if (typeof MIDI === 'undefined') MIDI = {};

(function(root) {

	var util = root.util || (root.util = {});

	util.request = function(opts, onsuccess, onerror, onprogress) { 'use strict';
		if (typeof opts === 'string') opts = {url: opts};
		///
		var data = opts.data;
		var url = opts.url;
		var method = opts.method || (opts.data ? 'POST' : 'GET');
		var format = opts.format;
		var headers = opts.headers;
		var responseType = opts.responseType;
		var withCredentials = opts.withCredentials || false;
		///
		var onsuccess = onsuccess || opts.onsuccess;
		var onerror = onerror || opts.onerror;
		var onprogress = onprogress || opts.onprogress;
		///
		if (typeof NodeFS !== 'undefined' && root.loc.isLocalUrl(url)) {
			NodeFS.readFile(url, 'utf8', function(err, res) {
				if (err) {
					onerror && onerror(err);
				} else {
					onsuccess && onsuccess({responseText: res});
				}
			});
			return;
		}
		///
		var xhr = new XMLHttpRequest();
		xhr.open(method, url, true);
		///
		if (headers) {
			for (var type in headers) {
				xhr.setRequestHeader(type, headers[type]);
			}
		} else if (data) { // set the default headers for POST
			xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		}
		if (format === 'binary') { //- default to responseType="blob" when supported
			if (xhr.overrideMimeType) {
				xhr.overrideMimeType('text/plain; charset=x-user-defined');
			}
		}
		if (responseType) {
			xhr.responseType = responseType;
		}
		if (withCredentials) {
			xhr.withCredentials = 'true';
		}
		if (onerror && 'onerror' in xhr) {
			xhr.onerror = onerror;
		}
		if (onprogress && xhr.upload && 'onprogress' in xhr.upload) {
			if (data) {
				xhr.upload.onprogress = function(evt) {
					onprogress.call(xhr, evt, event.loaded / event.total);
				};
			} else {
				xhr.addEventListener('progress', function(evt) {
					var totalBytes = 0;
					if (evt.lengthComputable) {
						totalBytes = evt.total;
					} else if (xhr.totalBytes) {
						totalBytes = xhr.totalBytes;
					} else {
						var rawBytes = parseInt(xhr.getResponseHeader('Content-Length-Raw'));
						if (isFinite(rawBytes)) {
							xhr.totalBytes = totalBytes = rawBytes;
						} else {
							return;
						}
					}
					onprogress.call(xhr, evt, evt.loaded / totalBytes);
				});
			}
		}
		///
		xhr.onreadystatechange = function(evt) {
			if (xhr.readyState === 4) { // The request is complete
				if (xhr.status === 200 || // Response OK
					xhr.status === 304 || // Not Modified
					xhr.status === 308 || // Permanent Redirect
					xhr.status === 0 && root.client.cordova // Cordova quirk
				) {
					if (onsuccess) {
						var res;
						if (format === 'xml') {
							res = evt.target.responseXML;
						} else if (format === 'text') {
							res = evt.target.responseText;
						} else if (format === 'json') {
							try {
								res = JSON.parse(evt.target.response);
							} catch(err) {
								onerror && onerror.call(xhr, evt);
							}
						}
						///
						onsuccess.call(xhr, evt, res);
					}
				} else {
					onerror && onerror.call(xhr, evt);
				}
			}
		};
		xhr.send(data);
		return xhr;
	};

	/// NodeJS
	if (typeof module !== 'undefined' && module.exports) {
		var NodeFS = require('fs');
		XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
		module.exports = root.util.request;
	}

})(MIDI);/*
	-----------------------------------------------------------
	dom.loadScript.js : 0.1.4 : 2014/02/12 : http://mudcu.be
	-----------------------------------------------------------
	Copyright 2011-2014 Mudcube. All rights reserved.
	-----------------------------------------------------------
	/// No verification
	dom.loadScript.add("../js/jszip/jszip.js");
	/// Strict loading order and verification.
	dom.loadScript.add({
		strictOrder: true,
		urls: [
			{
				url: "../js/jszip/jszip.js",
				verify: "JSZip",
				onsuccess: function() {
					console.log(1)
				}
			},
			{ 
				url: "../inc/downloadify/js/swfobject.js",
				verify: "swfobject",
				onsuccess: function() {
					console.log(2)
				}
			}
		],
		onsuccess: function() {
			console.log(3)
		}
	});
	/// Just verification.
	dom.loadScript.add({
		url: "../js/jszip/jszip.js",
		verify: "JSZip",
		onsuccess: function() {
			console.log(1)
		}
	});
*/

if (typeof(dom) === "undefined") var dom = {};

(function() { "use strict";

dom.loadScript = function() {
	this.loaded = {};
	this.loading = {};
	return this;
};

dom.loadScript.prototype.add = function(config) {
	var that = this;
	if (typeof(config) === "string") {
		config = { url: config };
	}
	var urls = config.urls;
	if (typeof(urls) === "undefined") {
		urls = [{ 
			url: config.url, 
			verify: config.verify
		}];
	}
	/// adding the elements to the head
	var doc = document.getElementsByTagName("head")[0];
	/// 
	var testElement = function(element, test) {
		if (that.loaded[element.url]) return;
		if (test && globalExists(test) === false) return;
		that.loaded[element.url] = true;
		//
		if (that.loading[element.url]) that.loading[element.url]();
		delete that.loading[element.url];
		//
		if (element.onsuccess) element.onsuccess();
		if (typeof(getNext) !== "undefined") getNext();
	};
	///
	var hasError = false;
	var batchTest = [];
	var addElement = function(element) {
		if (typeof(element) === "string") {
			element = {
				url: element,
				verify: config.verify
			};
		}
		if (/([\w\d.\[\]\'\"])$/.test(element.verify)) { // check whether its a variable reference
			var verify = element.test = element.verify;
			if (typeof(verify) === "object") {
				for (var n = 0; n < verify.length; n ++) {
					batchTest.push(verify[n]);
				}			
			} else {
				batchTest.push(verify);
			}
		}
		if (that.loaded[element.url]) return;
		var script = document.createElement("script");
		script.onreadystatechange = function() {
			if (this.readyState !== "loaded" && this.readyState !== "complete") return;
			testElement(element);
		};
		script.onload = function() {
			testElement(element);
		};
		script.onerror = function() {
			hasError = true;
			delete that.loading[element.url];
			if (typeof(element.test) === "object") {
				for (var key in element.test) {
					removeTest(element.test[key]);
				}			
			} else {
				removeTest(element.test);
			}
		};
		script.setAttribute("type", "text/javascript");
		script.setAttribute("src", element.url);
		doc.appendChild(script);
		that.loading[element.url] = function() {};
	};
	/// checking to see whether everything loaded properly
	var removeTest = function(test) {
		var ret = [];
		for (var n = 0; n < batchTest.length; n ++) {
			if (batchTest[n] === test) continue;
			ret.push(batchTest[n]);
		}
		batchTest = ret;
	};
	var onLoad = function(element) {
		if (element) {
			testElement(element, element.test);
		} else {
			for (var n = 0; n < urls.length; n ++) {
				testElement(urls[n], urls[n].test);
			}
		}
		var istrue = true;
		for (var n = 0; n < batchTest.length; n ++) {
			if (globalExists(batchTest[n]) === false) {
				istrue = false;
			}
		}
		if (!config.strictOrder && istrue) { // finished loading all the requested scripts
			if (hasError) {
				if (config.error) {
					config.error();
				}
			} else if (config.onsuccess) {
				config.onsuccess();
			}
		} else { // keep calling back the function
			setTimeout(function() { //- should get slower over time?
				onLoad(element);
			}, 10);
		}
	};
	/// loading methods;  strict ordering or loose ordering
	if (config.strictOrder) {
		var ID = -1;
		var getNext = function() {
			ID ++;
			if (!urls[ID]) { // all elements are loaded
				if (hasError) {
					if (config.error) {
						config.error();
					}
				} else if (config.onsuccess) {
					config.onsuccess();
				}
			} else { // loading new script
				var element = urls[ID];
				var url = element.url;
				if (that.loading[url]) { // already loading from another call (attach to event)
					that.loading[url] = function() {
						if (element.onsuccess) element.onsuccess();
						getNext();
					}
				} else if (!that.loaded[url]) { // create script element
					addElement(element);
					onLoad(element);
				} else { // it's already been successfully loaded
					getNext();
				}
			}
		};
		getNext();
	} else { // loose ordering
		for (var ID = 0; ID < urls.length; ID ++) {
			addElement(urls[ID]);
			onLoad(urls[ID]);
		}
	}
};

dom.loadScript = new dom.loadScript();

var globalExists = function(path, root) {
	try {
		path = path.split('"').join('').split("'").join('').split(']').join('').split('[').join('.');
		var parts = path.split(".");
		var length = parts.length;
		var object = root || window;
		for (var n = 0; n < length; n ++) {
			var key = parts[n];
			if (object[key] == null) {
				return false;
			} else { //
				object = object[key];
			}
		}
		return true;
	} catch(e) {
		return false;
	}
};

})();

/// For NodeJS
if (typeof (module) !== "undefined" && module.exports) {
	module.exports = dom.loadScript;
}