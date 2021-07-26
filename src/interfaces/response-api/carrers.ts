interface Icarrer {
	levels: {
		code: string;
		subjects: {
			code: string;
			name: string;
			groups: {
				code: string;
				schedule: {
					day: string;
					start: string;
					end: string;
					duration: number;
					room: string;
					teacher: string;
					isClass: boolean;
				}[];
			}[];
		}[];
	}[];
}

export { Icarrer };
