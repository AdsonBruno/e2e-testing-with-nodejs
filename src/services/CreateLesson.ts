import { LessonsRepository } from "../repositories/LessonsRepository";

interface CreateLessonRequest {
  title: string;
  description?: string;
}

export class CreateLesson {
  constructor(
    private lessonRepository: LessonsRepository,
  ) {}
  
  async execute({ title, description }: CreateLessonRequest) {
    
    if(!title) {
      throw new Error('Title is required.');
    }
    
    await this.lessonRepository.create({
      title,
      description
    });
  }
}