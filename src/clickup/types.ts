export interface Task {
    id: string;
    custom_id?: any;
    name: string;
    text_content?: string;
    description?: string;
    status: Status;
    orderindex: string;
    date_created: string;
    date_updated: string;
    date_closed?: any;
    archived: boolean;
    creator: Creator;
    assignees: Assignee[];
    watchers: any[];
    checklists: Checklist[];
    tags: any[];
    parent?: any;
    priority?: Priority;
    due_date: string;
    start_date?: any;
    points?: any;
    time_estimate?: number;
    custom_fields: Customfield[];
    dependencies: any[];
    linked_tasks: any[];
    team_id: string;
    url: string;
    permission_level: string;
    list: List;
    project: Project;
    folder: Project;
    space: Space;
}

export interface Space {
    id: string;
}

export interface Project {
    id: string;
    name: string;
    hidden: boolean;
    access: boolean;
}

export interface List {
    id: string;
    name: string;
    access: boolean;
}

export interface Customfield {
    id: string;
    name: string;
    type: string;
    type_config: Typeconfig;
    date_created: string;
    hide_from_guests: boolean;
    required?: boolean;
    value?: Value | Value | number;
}

export interface Value {
    percent_complete: number;
}

export interface Typeconfig {
    default?: number;
    placeholder?: any;
    options?: Option[];
    new_drop_down?: boolean;
    tracking?: Tracking;
    complete_on?: number;
    simple?: boolean;
    formula?: string;
}

export interface Tracking {
    subtasks: boolean;
    checklists: boolean;
    assigned_comments: boolean;
}

export interface Option {
    id: string;
    name: string;
    color: string;
    orderindex: number;
}

export interface Priority {
    id: string;
    priority: string;
    color: string;
    orderindex: string;
}

export interface Checklist {
    id: string;
    task_id: string;
    name: string;
    date_created: string;
    orderindex: number;
    creator: number;
    resolved: number;
    unresolved: number;
    items: any[];
}

export interface Assignee {
    id: number;
    username: string;
    color: string;
    initials: string;
    email: string;
    profilePicture?: string | string;
}

export interface Creator {
    id: number;
    username: string;
    color: string;
    email: string;
    profilePicture?: string;
}

export interface Status {
    status: string;
    color: string;
    type: string;
    orderindex: number;
}