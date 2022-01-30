import { http } from "./httpRequest";
import { Icarrer, Idepartment, IdepartementCarrer } from "../interfaces";

class DepartmentsService {
	private readonly breakPoint = "departments";

	async getAllDepartments(): Promise<Idepartment[] | null> {
		try {
			const { data }: { data: Idepartment[] } = await http.get(`/${this.breakPoint}`);
			return data;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	async getDepartmentCarrers(department: string): Promise<IdepartementCarrer[] | null> {
		try {
			const { data }: { data: IdepartementCarrer[] } = await http.get(`/${this.breakPoint}/${department}`);
			return data;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	async getDepartmentCarrer(department: string, carrer: string): Promise<Icarrer | null> {
		try {
			const { data }: { data: Icarrer } = await http.get(`/${this.breakPoint}/${department}/${carrer}`);
			return data;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	async takeScreenshot(contentHtml: string): Promise<string> {
		try {
			const { data }: { data: string } = await http.post(`/download/schedule`, { contentHtml });
			return data;
		} catch (error) {
			console.error(error);
			return "";
		}
	}
}

export default new DepartmentsService();
