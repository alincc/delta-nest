import { UserService } from "src/services/user.service";
import { SchoolService } from "src/services/school.service";
import { FlightService } from "src/services/flight.service";
import { GradeService } from "src/services/grade.service";
import { GroupService } from "src/services/group.service";
import { PaymentService } from "src/services/payment.service";
import { ProgramService } from "src/services/program.service";
import { SubjectService } from "src/services/subject.service";
export declare class MaintenanceControllerService {
    private readonly userService;
    private readonly schoolService;
    private readonly flightService;
    private readonly gradeService;
    private readonly groupService;
    private readonly paymentService;
    private readonly programService;
    private readonly subjectService;
    constructor(userService: UserService, schoolService: SchoolService, flightService: FlightService, gradeService: GradeService, groupService: GroupService, paymentService: PaymentService, programService: ProgramService, subjectService: SubjectService);
    resetDataBase(): Promise<unknown>;
    getCurrentState(): Promise<unknown>;
}
