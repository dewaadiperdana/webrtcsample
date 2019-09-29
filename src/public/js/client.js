var divSelectRoom = document.getElementById("select-room");
var divConsultingRoom = document.getElementById("consulting-room");
var inputRoomNumber = document.getElementById("room-number");
var btnGoRoom = document.getElementById("go-room");
var localVideo = document.getElementById("local-video");
var remoteVideo = document.getElementById("remote-video");

var roomNumber;
var localStream;
var remoteStream;
var rtcPeerConnection;

var iceServers = {
  iceServers: [
    {
      urls: "stun:stun.l.google.com:19302"
    },
    {
      urls: "stun:stun1.l.google.com:19302"
    },
    {
      urls: "stun:stun2.l.google.com:19302"
    },
    {
      urls: "stun:stun3.l.google.com:19302"
    },
    {
      urls: "stun:stun4.l.google.com:19302"
    },
    {
      urls: "stun:stun.ekiga.net"
    },
    {
      urls: "stun:stun.ideasip.com"
    },
    {
      urls: "stun:stun.rixtelecom.se"
    },
    {
      urls: "stun:stun.schlund.de"
    },
    {
      urls: "stun:stun.stunprotocol.org:3478"
    },
    {
      urls: "stun:stun.voiparound.com"
    },
    {
      urls: "stun:stun.voipbuster.com"
    },
    {
      urls: "stun:stun.voipstunt.com"
    },
    {
      urls: "stun:stun.voxgratia.org"
    },
    {
      urls: "stun:s1.taraba.net:3478"
    },
    {
      urls: "stun:s2.taraba.net:3478"
    },
    {
      urls: "stun:stun.12connect.com:3478"
    },
    {
      urls: "stun:stun.12voip.com:3478"
    },
    {
      urls: "stun:stun.1und1.de:3478"
    },
    {
      urls: "stun:stun.2talk.co.nz:3478"
    },
    {
      urls: "stun:stun.2talk.com:3478"
    },
    {
      urls: "stun:stun.3clogic.com:3478"
    },
    {
      urls: "stun:stun.3cx.com:3478"
    },
    {
      urls: "stun:stun.a-mm.tv:3478"
    },
    {
      urls: "stun:stun.aa.net.uk:3478"
    },
    {
      urls: "stun:stun.acrobits.cz:3478"
    },
    {
      urls: "stun:stun.actionvoip.com:3478"
    },
    {
      urls: "stun:stun.advfn.com:3478"
    },
    {
      urls: "stun:stun.aeta-audio.com:3478"
    },
    {
      urls: "stun:stun.aeta.com:3478"
    },
    {
      urls: "stun:stun.alltel.com.au:3478"
    },
    {
      urls: "stun:stun.altar.com.pl:3478"
    },
    {
      urls: "stun:stun.annatel.net:3478"
    },
    {
      urls: "stun:stun.antisip.com:3478"
    },
    {
      urls: "stun:stun.arbuz.ru:3478"
    },
    {
      urls: "stun:stun.avigora.com:3478"
    },
    {
      urls: "stun:stun.avigora.fr:3478"
    },
    {
      urls: "stun:stun.awa-shima.com:3478"
    },
    {
      urls: "stun:stun.awt.be:3478"
    },
    {
      urls: "stun:stun.b2b2c.ca:3478"
    },
    {
      urls: "stun:stun.bahnhof.net:3478"
    },
    {
      urls: "stun:stun.barracuda.com:3478"
    },
    {
      urls: "stun:stun.bluesip.net:3478"
    },
    {
      urls: "stun:stun.bmwgs.cz:3478"
    },
    {
      urls: "stun:stun.botonakis.com:3478"
    },
    {
      urls: "stun:stun.budgetphone.nl:3478"
    },
    {
      urls: "stun:stun.budgetsip.com:3478"
    },
    {
      urls: "stun:stun.cablenet-as.net:3478"
    },
    {
      urls: "stun:stun.callromania.ro:3478"
    },
    {
      urls: "stun:stun.callwithus.com:3478"
    },
    {
      urls: "stun:stun.cbsys.net:3478"
    },
    {
      urls: "stun:stun.chathelp.ru:3478"
    },
    {
      urls: "stun:stun.cheapvoip.com:3478"
    },
    {
      urls: "stun:stun.ciktel.com:3478"
    },
    {
      urls: "stun:stun.cloopen.com:3478"
    },
    {
      urls: "stun:stun.colouredlines.com.au:3478"
    },
    {
      urls: "stun:stun.comfi.com:3478"
    },
    {
      urls: "stun:stun.commpeak.com:3478"
    },
    {
      urls: "stun:stun.comtube.com:3478"
    },
    {
      urls: "stun:stun.comtube.ru:3478"
    },
    {
      urls: "stun:stun.cope.es:3478"
    },
    {
      urls: "stun:stun.counterpath.com:3478"
    },
    {
      urls: "stun:stun.counterpath.net:3478"
    },
    {
      urls: "stun:stun.cryptonit.net:3478"
    },
    {
      urls: "stun:stun.darioflaccovio.it:3478"
    },
    {
      urls: "stun:stun.datamanagement.it:3478"
    },
    {
      urls: "stun:stun.dcalling.de:3478"
    },
    {
      urls: "stun:stun.decanet.fr:3478"
    },
    {
      urls: "stun:stun.demos.ru:3478"
    },
    {
      urls: "stun:stun.develz.org:3478"
    },
    {
      urls: "stun:stun.dingaling.ca:3478"
    },
    {
      urls: "stun:stun.doublerobotics.com:3478"
    },
    {
      urls: "stun:stun.drogon.net:3478"
    },
    {
      urls: "stun:stun.duocom.es:3478"
    },
    {
      urls: "stun:stun.dus.net:3478"
    },
    {
      urls: "stun:stun.e-fon.ch:3478"
    },
    {
      urls: "stun:stun.easybell.de:3478"
    },
    {
      urls: "stun:stun.easycall.pl:3478"
    },
    {
      urls: "stun:stun.easyvoip.com:3478"
    },
    {
      urls: "stun:stun.efficace-factory.com:3478"
    },
    {
      urls: "stun:stun.einsundeins.com:3478"
    },
    {
      urls: "stun:stun.einsundeins.de:3478"
    },
    {
      urls: "stun:stun.ekiga.net:3478"
    },
    {
      urls: "stun:stun.epygi.com:3478"
    },
    {
      urls: "stun:stun.etoilediese.fr:3478"
    },
    {
      urls: "stun:stun.eyeball.com:3478"
    },
    {
      urls: "stun:stun.faktortel.com.au:3478"
    },
    {
      urls: "stun:stun.freecall.com:3478"
    },
    {
      urls: "stun:stun.freeswitch.org:3478"
    },
    {
      urls: "stun:stun.freevoipdeal.com:3478"
    },
    {
      urls: "stun:stun.fuzemeeting.com:3478"
    },
    {
      urls: "stun:stun.gmx.de:3478"
    },
    {
      urls: "stun:stun.gmx.net:3478"
    },
    {
      urls: "stun:stun.gradwell.com:3478"
    },
    {
      urls: "stun:stun.halonet.pl:3478"
    },
    {
      urls: "stun:stun.hellonanu.com:3478"
    },
    {
      urls: "stun:stun.hoiio.com:3478"
    },
    {
      urls: "stun:stun.hosteurope.de:3478"
    },
    {
      urls: "stun:stun.ideasip.com:3478"
    },
    {
      urls: "stun:stun.imesh.com:3478"
    },
    {
      urls: "stun:stun.infra.net:3478"
    },
    {
      urls: "stun:stun.internetcalls.com:3478"
    },
    {
      urls: "stun:stun.intervoip.com:3478"
    },
    {
      urls: "stun:stun.ipcomms.net:3478"
    },
    {
      urls: "stun:stun.ipfire.org:3478"
    },
    {
      urls: "stun:stun.ippi.fr:3478"
    },
    {
      urls: "stun:stun.ipshka.com:3478"
    },
    {
      urls: "stun:stun.iptel.org:3478"
    },
    {
      urls: "stun:stun.irian.at:3478"
    },
    {
      urls: "stun:stun.it1.hr:3478"
    },
    {
      urls: "stun:stun.ivao.aero:3478"
    },
    {
      urls: "stun:stun.jappix.com:3478"
    },
    {
      urls: "stun:stun.jumblo.com:3478"
    },
    {
      urls: "stun:stun.justvoip.com:3478"
    },
    {
      urls: "stun:stun.kanet.ru:3478"
    },
    {
      urls: "stun:stun.kiwilink.co.nz:3478"
    },
    {
      urls: "stun:stun.kundenserver.de:3478"
    },
    {
      urls: "stun:stun.l.google.com:19302"
    },
    {
      urls: "stun:stun.linea7.net:3478"
    },
    {
      urls: "stun:stun.linphone.org:3478"
    },
    {
      urls: "stun:stun.liveo.fr:3478"
    },
    {
      urls: "stun:stun.lowratevoip.com:3478"
    },
    {
      urls: "stun:stun.lugosoft.com:3478"
    },
    {
      urls: "stun:stun.lundimatin.fr:3478"
    },
    {
      urls: "stun:stun.magnet.ie:3478"
    },
    {
      urls: "stun:stun.manle.com:3478"
    },
    {
      urls: "stun:stun.mgn.ru:3478"
    },
    {
      urls: "stun:stun.mit.de:3478"
    },
    {
      urls: "stun:stun.mitake.com.tw:3478"
    },
    {
      urls: "stun:stun.miwifi.com:3478"
    },
    {
      urls: "stun:stun.modulus.gr:3478"
    },
    {
      urls: "stun:stun.mozcom.com:3478"
    },
    {
      urls: "stun:stun.myvoiptraffic.com:3478"
    },
    {
      urls: "stun:stun.mywatson.it:3478"
    },
    {
      urls: "stun:stun.nas.net:3478"
    },
    {
      urls: "stun:stun.neotel.co.za:3478"
    },
    {
      urls: "stun:stun.netappel.com:3478"
    },
    {
      urls: "stun:stun.netappel.fr:3478"
    },
    {
      urls: "stun:stun.netgsm.com.tr:3478"
    },
    {
      urls: "stun:stun.nfon.net:3478"
    },
    {
      urls: "stun:stun.noblogs.org:3478"
    },
    {
      urls: "stun:stun.noc.ams-ix.net:3478"
    },
    {
      urls: "stun:stun.node4.co.uk:3478"
    },
    {
      urls: "stun:stun.nonoh.net:3478"
    },
    {
      urls: "stun:stun.nottingham.ac.uk:3478"
    },
    {
      urls: "stun:stun.nova.is:3478"
    },
    {
      urls: "stun:stun.nventure.com:3478"
    },
    {
      urls: "stun:stun.on.net.mk:3478"
    },
    {
      urls: "stun:stun.ooma.com:3478"
    },
    {
      urls: "stun:stun.ooonet.ru:3478"
    },
    {
      urls: "stun:stun.oriontelekom.rs:3478"
    },
    {
      urls: "stun:stun.outland-net.de:3478"
    },
    {
      urls: "stun:stun.ozekiphone.com:3478"
    },
    {
      urls: "stun:stun.patlive.com:3478"
    },
    {
      urls: "stun:stun.personal-voip.de:3478"
    },
    {
      urls: "stun:stun.petcube.com:3478"
    },
    {
      urls: "stun:stun.phone.com:3478"
    },
    {
      urls: "stun:stun.phoneserve.com:3478"
    },
    {
      urls: "stun:stun.pjsip.org:3478"
    },
    {
      urls: "stun:stun.poivy.com:3478"
    },
    {
      urls: "stun:stun.powerpbx.org:3478"
    },
    {
      urls: "stun:stun.powervoip.com:3478"
    },
    {
      urls: "stun:stun.ppdi.com:3478"
    },
    {
      urls: "stun:stun.prizee.com:3478"
    },
    {
      urls: "stun:stun.qq.com:3478"
    },
    {
      urls: "stun:stun.qvod.com:3478"
    },
    {
      urls: "stun:stun.rackco.com:3478"
    },
    {
      urls: "stun:stun.rapidnet.de:3478"
    },
    {
      urls: "stun:stun.rb-net.com:3478"
    },
    {
      urls: "stun:stun.refint.net:3478"
    },
    {
      urls: "stun:stun.remote-learner.net:3478"
    },
    {
      urls: "stun:stun.rixtelecom.se:3478"
    },
    {
      urls: "stun:stun.rockenstein.de:3478"
    },
    {
      urls: "stun:stun.rolmail.net:3478"
    },
    {
      urls: "stun:stun.rounds.com:3478"
    },
    {
      urls: "stun:stun.rynga.com:3478"
    },
    {
      urls: "stun:stun.samsungsmartcam.com:3478"
    },
    {
      urls: "stun:stun.schlund.de:3478"
    },
    {
      urls: "stun:stun.services.mozilla.com:3478"
    },
    {
      urls: "stun:stun.sigmavoip.com:3478"
    },
    {
      urls: "stun:stun.sip.us:3478"
    },
    {
      urls: "stun:stun.sipdiscount.com:3478"
    },
    {
      urls: "stun:stun.sipgate.net:10000"
    },
    {
      urls: "stun:stun.sipgate.net:3478"
    },
    {
      urls: "stun:stun.siplogin.de:3478"
    },
    {
      urls: "stun:stun.sipnet.net:3478"
    },
    {
      urls: "stun:stun.sipnet.ru:3478"
    },
    {
      urls: "stun:stun.siportal.it:3478"
    },
    {
      urls: "stun:stun.sippeer.dk:3478"
    },
    {
      urls: "stun:stun.siptraffic.com:3478"
    },
    {
      urls: "stun:stun.skylink.ru:3478"
    },
    {
      urls: "stun:stun.sma.de:3478"
    },
    {
      urls: "stun:stun.smartvoip.com:3478"
    },
    {
      urls: "stun:stun.smsdiscount.com:3478"
    },
    {
      urls: "stun:stun.snafu.de:3478"
    },
    {
      urls: "stun:stun.softjoys.com:3478"
    },
    {
      urls: "stun:stun.solcon.nl:3478"
    },
    {
      urls: "stun:stun.solnet.ch:3478"
    },
    {
      urls: "stun:stun.sonetel.com:3478"
    },
    {
      urls: "stun:stun.sonetel.net:3478"
    },
    {
      urls: "stun:stun.sovtest.ru:3478"
    },
    {
      urls: "stun:stun.speedy.com.ar:3478"
    },
    {
      urls: "stun:stun.spokn.com:3478"
    },
    {
      urls: "stun:stun.srce.hr:3478"
    },
    {
      urls: "stun:stun.ssl7.net:3478"
    },
    {
      urls: "stun:stun.stunprotocol.org:3478"
    },
    {
      urls: "stun:stun.symform.com:3478"
    },
    {
      urls: "stun:stun.symplicity.com:3478"
    },
    {
      urls: "stun:stun.sysadminman.net:3478"
    },
    {
      urls: "stun:stun.t-online.de:3478"
    },
    {
      urls: "stun:stun.tagan.ru:3478"
    },
    {
      urls: "stun:stun.tatneft.ru:3478"
    },
    {
      urls: "stun:stun.teachercreated.com:3478"
    },
    {
      urls: "stun:stun.tel.lu:3478"
    },
    {
      urls: "stun:stun.telbo.com:3478"
    },
    {
      urls: "stun:stun.telefacil.com:3478"
    },
    {
      urls: "stun:stun.tis-dialog.ru:3478"
    },
    {
      urls: "stun:stun.tng.de:3478"
    },
    {
      urls: "stun:stun.twt.it:3478"
    },
    {
      urls: "stun:stun.u-blox.com:3478"
    },
    {
      urls: "stun:stun.ucallweconn.net:3478"
    },
    {
      urls: "stun:stun.ucsb.edu:3478"
    },
    {
      urls: "stun:stun.ucw.cz:3478"
    },
    {
      urls: "stun:stun.uls.co.za:3478"
    },
    {
      urls: "stun:stun.unseen.is:3478"
    },
    {
      urls: "stun:stun.usfamily.net:3478"
    },
    {
      urls: "stun:stun.veoh.com:3478"
    },
    {
      urls: "stun:stun.vidyo.com:3478"
    },
    {
      urls: "stun:stun.vipgroup.net:3478"
    },
    {
      urls: "stun:stun.virtual-call.com:3478"
    },
    {
      urls: "stun:stun.viva.gr:3478"
    },
    {
      urls: "stun:stun.vivox.com:3478"
    },
    {
      urls: "stun:stun.vline.com:3478"
    },
    {
      urls: "stun:stun.vo.lu:3478"
    },
    {
      urls: "stun:stun.vodafone.ro:3478"
    },
    {
      urls: "stun:stun.voicetrading.com:3478"
    },
    {
      urls: "stun:stun.voip.aebc.com:3478"
    },
    {
      urls: "stun:stun.voip.blackberry.com:3478"
    },
    {
      urls: "stun:stun.voip.eutelia.it:3478"
    },
    {
      urls: "stun:stun.voiparound.com:3478"
    },
    {
      urls: "stun:stun.voipblast.com:3478"
    },
    {
      urls: "stun:stun.voipbuster.com:3478"
    },
    {
      urls: "stun:stun.voipbusterpro.com:3478"
    },
    {
      urls: "stun:stun.voipcheap.co.uk:3478"
    },
    {
      urls: "stun:stun.voipcheap.com:3478"
    },
    {
      urls: "stun:stun.voipfibre.com:3478"
    },
    {
      urls: "stun:stun.voipgain.com:3478"
    },
    {
      urls: "stun:stun.voipgate.com:3478"
    },
    {
      urls: "stun:stun.voipinfocenter.com:3478"
    },
    {
      urls: "stun:stun.voipplanet.nl:3478"
    },
    {
      urls: "stun:stun.voippro.com:3478"
    },
    {
      urls: "stun:stun.voipraider.com:3478"
    },
    {
      urls: "stun:stun.voipstunt.com:3478"
    },
    {
      urls: "stun:stun.voipwise.com:3478"
    },
    {
      urls: "stun:stun.voipzoom.com:3478"
    },
    {
      urls: "stun:stun.vopium.com:3478"
    },
    {
      urls: "stun:stun.voxgratia.org:3478"
    },
    {
      urls: "stun:stun.voxox.com:3478"
    },
    {
      urls: "stun:stun.voys.nl:3478"
    },
    {
      urls: "stun:stun.voztele.com:3478"
    },
    {
      urls: "stun:stun.vyke.com:3478"
    },
    {
      urls: "stun:stun.webcalldirect.com:3478"
    },
    {
      urls: "stun:stun.whoi.edu:3478"
    },
    {
      urls: "stun:stun.wifirst.net:3478"
    },
    {
      urls: "stun:stun.wwdl.net:3478"
    },
    {
      urls: "stun:stun.xs4all.nl:3478"
    },
    {
      urls: "stun:stun.xtratelecom.es:3478"
    },
    {
      urls: "stun:stun.yesss.at:3478"
    },
    {
      urls: "stun:stun.zadarma.com:3478"
    },
    {
      urls: "stun:stun.zadv.com:3478"
    },
    {
      urls: "stun:stun.zoiper.com:3478"
    },
    {
      urls: "stun:stun1.faktortel.com.au:3478"
    },
    {
      urls: "stun:stun1.l.google.com:19302"
    },
    {
      urls: "stun:stun1.voiceeclipse.net:3478"
    },
    {
      urls: "stun:stun2.l.google.com:19302"
    },
    {
      urls: "stun:stun3.l.google.com:19302"
    },
    {
      urls: "stun:stun4.l.google.com:19302"
    },
    {
      urls: "stun:stunserver.org:3478"
    },
    { url: "stun:stun01.sipphone.com" },
    { url: "stun:stun.ekiga.net" },
    { url: "stun:stun.fwdnet.net" },
    { url: "stun:stun.ideasip.com" },
    { url: "stun:stun.iptel.org" },
    { url: "stun:stun.rixtelecom.se" },
    { url: "stun:stun.schlund.de" },
    { url: "stun:stun.l.google.com:19302" },
    { url: "stun:stun1.l.google.com:19302" },
    { url: "stun:stun2.l.google.com:19302" },
    { url: "stun:stun3.l.google.com:19302" },
    { url: "stun:stun4.l.google.com:19302" },
    { url: "stun:stunserver.org" },
    { url: "stun:stun.softjoys.com" },
    { url: "stun:stun.voiparound.com" },
    { url: "stun:stun.voipbuster.com" },
    { url: "stun:stun.voipstunt.com" },
    { url: "stun:stun.voxgratia.org" },
    { url: "stun:stun.xten.com" },
    {
      url: "turn:numb.viagenie.ca",
      credential: "muazkh",
      username: "webrtc@live.com"
    },
    {
      url: "turn:192.158.29.39:3478?transport=udp",
      credential: "JZEOEt2V3Qb0y27GRntt2u2PAYA=",
      username: "28224511:1379330808"
    },
    {
      url: "turn:192.158.29.39:3478?transport=tcp",
      credential: "JZEOEt2V3Qb0y27GRntt2u2PAYA=",
      username: "28224511:1379330808"
    },
    {
      url: "turn:turn.bistri.com:80",
      credential: "homeo",
      username: "homeo"
    },
    {
      url: "turn:turn.anyfirewall.com:443?transport=tcp",
      credential: "webrtc",
      username: "webrtc"
    },
    {
      urls: ["turn:13.250.13.83:3478?transport=udp"],
      username: "YzYNCouZM1mhqhmseWk6",
      credential: "YzYNCouZM1mhqhmseWk6"
    },
    {
      url: "turn:numb.viagenie.ca",
      credential: "muazkh",
      username: "webrtc@live.com"
    },
    {
      url: "turn:192.158.29.39:3478?transport=udp",
      credential: "JZEOEt2V3Qb0y27GRntt2u2PAYA=",
      username: "28224511:1379330808"
    },
    {
      url: "turn:192.158.29.39:3478?transport=tcp",
      credential: "JZEOEt2V3Qb0y27GRntt2u2PAYA=",
      username: "28224511:1379330808"
    }
  ]
};

var streamConstraints = { audio: true, video: true };
var isCaller;

var socket = io();

btnGoRoom.onclick = function() {
  if (inputRoomNumber.value === "") {
    alert("Please enter a room number");
  } else {
    roomNumber = inputRoomNumber.value;

    socket.emit("create or join", roomNumber);

    divSelectRoom.style = "display: none";
    divConsultingRoom.style = "display: block";
  }
};

socket.on("created", function(room) {
  navigator.getUserMedia(
    streamConstraints,
    function(stream) {
      localStream = stream;
      localVideo.srcObject = stream;
      isCaller = true;
    },
    function(error) {
      console.log(`An error occured when accessing media devices`);
    }
  );
});

socket.on("joined", function(room) {
  navigator.getUserMedia(
    streamConstraints,
    function(stream) {
      localStream = stream;
      localVideo.srcObject = stream;

      socket.emit("ready", roomNumber);
    },
    function(error) {
      console.log(`An error occured when accessing media devices`);
    }
  );
});

socket.on("ready", function() {
  if (isCaller) {
    rtcPeerConnection = new RTCPeerConnection(iceServers);

    rtcPeerConnection.onicecandidate = onIceCandidate;
    rtcPeerConnection.onaddstream = onAddStream;

    rtcPeerConnection.addStream(localStream);

    rtcPeerConnection.createOffer(setLocalOffer, function(e) {
      console.log(e);
    });
  }
});

socket.on("offer", function(event) {
  if (!isCaller) {
    rtcPeerConnection = new RTCPeerConnection(iceServers);

    rtcPeerConnection.onicecandidate = onIceCandidate;
    rtcPeerConnection.onaddstream = onAddStream;

    rtcPeerConnection.addStream(localStream);

    rtcPeerConnection.setRemoteDescription(new RTCSessionDescription(event));

    rtcPeerConnection.createAnswer(setLocalAnswer, function(e) {
      console.log(e);
    });
  }
});

socket.on("answer", function(event) {
  rtcPeerConnection.setRemoteDescription(new RTCSessionDescription(event));
});

socket.on("candidate", function(event) {
  var candidate = new RTCIceCandidate({
    sdpMLineIndex: event.label,
    candidate: event.candidate
  });

  rtcPeerConnection.addIceCandidate(candidate);
});

function onAddStream(event) {
  var newVideoFrame = document.createElement("video");
  newVideoFrame.setAttribute("width", 400);
  newVideoFrame.setAttribute("height", 400);
  newVideoFrame.setAttribute("autoplay", true);

  newVideoFrame.srcObject = event.stream;
  remoteStream = event.stream;

  divConsultingRoom.appendChild(newVideoFrame);
}

function onIceCandidate(event) {
  if (event.candidate) {
    console.log("sending ice candidate");

    socket.emit("candidate", {
      type: "candidate",
      label: event.candidate.sdpMLineIndex,
      id: event.candidate.sdpMid,
      candidate: event.candidate.candidate,
      room: roomNumber
    });
  }
}

function setLocalOffer(sessionDescription) {
  rtcPeerConnection.setLocalDescription(sessionDescription);

  socket.emit("offer", {
    type: "offer",
    sdp: sessionDescription,
    room: roomNumber
  });
}

function setLocalAnswer(sessionDescription) {
  rtcPeerConnection.setLocalDescription(sessionDescription);

  socket.emit("answer", {
    type: "answer",
    sdp: sessionDescription,
    room: roomNumber
  });
}

socket.on("full", function(message) {
  if (divSelectRoom.contains(document.getElementById("error-message"))) {
    document.getElementById("error-message").remove();
  }

  divSelectRoom.style = "display: block";
  divConsultingRoom.style = "display: none";

  var errorMessage = document.createElement("p");
  errorMessage.setAttribute("id", "error-message");
  errorMessage.style = "color: red;";
  errorMessage.innerText = message;

  divSelectRoom.appendChild(errorMessage);
});
