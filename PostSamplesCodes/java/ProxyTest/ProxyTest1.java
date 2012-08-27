import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;

public class ProxyTest1 {

	public static void main(String arg[]) {
		System.out.println("Testing Proxy");
		printProxyDetails();
		// adding proxy details
		System.out.println("Updating Proxy from Code");
		System.setProperty("http.proxyHost", "127.0.0.1");
		System.setProperty("http.proxyPort", "8083");
		// testing for changes is done
		printProxyDetails();
		try {
			URL url = new URL("http://www.google.lk");
			URLConnection myURLConnection = url.openConnection();
			myURLConnection.connect();

		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	public static void printProxyDetails() {
		System.out.println("HTTP Proxy Host"
				+ System.getProperty("http.proxyHost"));
		System.out.println("HTTP Proxy Port"
				+ System.getProperty("http.proxyPort"));
	}
}
