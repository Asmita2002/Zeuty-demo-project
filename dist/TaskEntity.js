var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
let TaskEntity = class TaskEntity {
    constructor() {
        // Initialize entity properties with a default value
        this.id = 0;
        this.title = '';
        this.description = '';
        this.deadline = new Date();
        this.status = 'pending';
    }
};
__decorate([
    PrimaryGeneratedColumn()
], TaskEntity.prototype, "id", void 0);
__decorate([
    Column()
], TaskEntity.prototype, "title", void 0);
__decorate([
    Column()
], TaskEntity.prototype, "description", void 0);
__decorate([
    Column()
], TaskEntity.prototype, "deadline", void 0);
__decorate([
    Column({
        type: 'enum',
        enum: ['pending', 'completed'],
        default: 'pending'
    })
], TaskEntity.prototype, "status", void 0);
TaskEntity = __decorate([
    Entity()
], TaskEntity);
export { TaskEntity };
