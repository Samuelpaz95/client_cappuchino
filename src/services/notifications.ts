import { http } from "./httpRequest";
import { Inotifications } from "@/interfaces";

class NotificationsService {
	private readonly breakPoint = "notifications";

	async getNotification(department: string): Promise<Inotifications | null> {
		try {
			const { data }: { data: Inotifications } = await http.get(`/${this.breakPoint}/${department}`);
			return data;
		} catch (error) {
			console.error(error);
			return null;
		}
	}
}

export default new NotificationsService();
