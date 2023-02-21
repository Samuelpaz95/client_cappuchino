import { http } from "./httpRequest";
import { INews } from "../interfaces";

class NewsService {
	private readonly breakPoint = "/news";

	async getAll(): Promise<INews | null> {
		try {
			const { data }: { data: INews } = await http.get(this.breakPoint);
			return data;
		} catch (error) {
			console.error(error);
			return null;
		}
	}
}

export default new NewsService();
