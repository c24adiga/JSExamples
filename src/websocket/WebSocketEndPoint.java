package websocket;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

import javax.inject.Singleton;
import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint(value="/wsserver")
@Singleton
public class WebSocketEndPoint {
	private Set<Session> userSessions=
		Collections.synchronizedSet(new HashSet<Session>());
	
	@OnOpen
	public void onOpen(Session session){
		userSessions.add(session);
		System.out.println("Id :"+session.getId()
				+" : "+session.getMessageHandlers());
	}
	@OnClose
	public void close(Session session){
		userSessions.remove(session);
	}
	@OnMessage
	public void recieveMessage(String message,Session session){
		for(Session sessions:userSessions){
			sessions.getAsyncRemote().sendText(message);			
		}		
	}
	

}
