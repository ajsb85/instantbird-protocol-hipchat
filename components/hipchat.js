let {interfaces: Ci, utils: Cu} = Components;

Cu.import("resource:///modules/imXPCOMUtils.jsm");
Cu.import("resource:///modules/jsProtoHelper.jsm");
Cu.import("resource:///modules/xmpp.jsm");
Cu.import("resource:///modules/xmpp-session.jsm");

function HipChatAccount(aProtoInstance, aImAccount) {
  this._init(aProtoInstance, aImAccount);
}

HipChatAccount.prototype = {
  __proto__: XMPPAccountPrototype,
  get canJoinChat() false,
  connect: function() {
    this._jid = this._parseJID(this.name.replace("@","\\40") + "@chat.hipchat.com/instantbird");
    this._connection = new XMPPSession("chat.hipchat.com", 5222,
                                       "opportunistic_tls", this._jid,
                                       this.imAccount.password, this);
  }
};

function HipChatProtocol() { }

HipChatProtocol.prototype = {
  __proto__: GenericProtocolPrototype,
  get normalizedName() "hipchat",
  get name() "HipChat",
  get iconBaseURI() "chrome://prpl-hipchat/skin/",
  getAccount: function(aImAccount) new HipChatAccount(this, aImAccount),
  classID: Components.ID("{3a764d60-6854-11e3-949a-0800200c9a66}")
};

const NSGetFactory = XPCOMUtils.generateNSGetFactory([HipChatProtocol]);
