import { http } from "./httpRequest";
import { professor, subjects } from "../interfaces";

class ProfessorService {
	private readonly breakPoint = "/professors";

	async getAllByDepartment(department: string): Promise<professor[] | null> {
		try {
			const { data }: { data: professor[] } = await http.get(
				`${this.breakPoint}/${department.toLowerCase()}`
			);
			return data;
		} catch (error) {
			console.error(error);
			return [];
		}
	}

	async getOneByDepartment(department: string, professor: string): Promise<subjects | null> {
		try {
			const { data }: { data: subjects } = await http.get(
				`${this.breakPoint}/${department.toLowerCase()}/${professor}`
			);
			return data;
		} catch (error) {
			console.error(error);
			return [];
		}
	}
}

export default new ProfessorService();
