import client from "../client";
import {Task} from "../types";

type GetTasksResponse = {
    tasks: Task[];
};

interface Parameters {
    team_id?: number,
    statuses?: string[],
    page?: number,
    due_date_lt?: number,
    due_date_gt?: number
}

interface GetTasksRequest  {
    teamId: number,
    parameters?: Parameters,
}

const GetTasks = async (req: GetTasksRequest): Promise<GetTasksResponse> => {
    const response = await client.get(`/team/${req.teamId}/task?`, {
        params: req.parameters
    });
    return response.data as GetTasksResponse
};

export default GetTasks