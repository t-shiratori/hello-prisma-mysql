import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	const targetUser = {
		name: 'Alice',
		email: 'alice@prisma.io',
		posts: {
			create: { title: 'Hello World' },
		},
		profile: {
			create: { bio: 'I like turtles' },
		},
	};

	const findTargetUserResult = await prisma.user.findUnique({
		where: {
			email: targetUser.email,
		},
	});

	if (!findTargetUserResult) {
		await prisma.user.create({
			data: targetUser,
		});
	}

	const allUsers = await prisma.user.findMany({
		include: {
			posts: true,
			profile: true,
		},
	});

	console.dir(allUsers, { depth: null });
}

main()
	.catch((e) => {
		throw e;
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
