import { UserService } from "src/services/user.service";
import { GroupService } from "src/services/group.service";
import { SchoolService } from "src/services/school.service";
import { ProgramService } from "src/services/program.service";
import { SubjectService } from "src/services/subject.service";
export declare class UploadControllerService {
    private readonly userService;
    private readonly schoolService;
    private readonly groupService;
    private readonly programService;
    private readonly subjectService;
    constructor(userService: UserService, schoolService: SchoolService, groupService: GroupService, programService: ProgramService, subjectService: SubjectService);
    updateAvatarUrl(param: any, avatarUrl: any): Promise<unknown>;
}
