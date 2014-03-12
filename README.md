instantbird-protocol-hipchat
============================

Assists to setup a chat account for HipChat.


ToDo:

- [ ] Support for ChatRoom. (The most important :P)
```cpp
  readonly attribute boolean canJoinChat;
  nsISimpleEnumerator getChatRoomFields();
  prplIChatRoomFieldValues getChatRoomDefaultFieldValues([optional] in AUTF8String aDefaultChatName);
  /*
   * Create a new chat conversation if it doesn't already exist.
   */
  void joinChat(in prplIChatRoomFieldValues aComponents);
```

- [ ] this is an incomplete item

###Donate Bitcoin:
      
      1MTd8fa6QrZLSST2uEiuwhLJNjeiGoUe5s
      
_Thank you very much for your generosity! -alexandersalas_