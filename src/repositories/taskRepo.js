import prisma from '../config/db.js';

export async function findAll(option) {
  const conditions = {};
  if (option == 'true'){
    conditions.OR = [
      { completed: true},
    ];
    
  }
  if (option == 'false'){
    conditions.OR = [
      { completed: false},
    ];
  }
  const Tasks = await prisma.task.findMany({
    where: conditions,}
  );
  return Tasks;
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
