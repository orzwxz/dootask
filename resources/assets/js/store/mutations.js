export default {
    /**
     * 添加任务成功
     * @param state
     * @param data
     */
    taskAddSuccess(state, data) {
        const {task, in_top, new_column} = data;
        if (task.parent_id == 0) {
            // 添加任务
            if (state.projectDetail.id == task.project_id) {
                if (new_column) {
                    state.projectDetail.project_column.push(new_column);
                }
                const column = state.projectDetail.project_column.find(({id}) => id === task.column_id);
                if (column) {
                    let index = column.project_task.findIndex(({id}) => id === task.id)
                    if (index === -1) {
                        if (in_top) {
                            column.project_task.unshift(task);
                        } else {
                            column.project_task.push(task);
                        }
                    }
                }
            }
            this.dispatch("getProjectBasic", task.project_id);
        } else {
            // 添加子任务
            if (state.projectDetail.id == task.project_id) {
                const column = state.projectDetail.project_column.find(({id}) => id === task.column_id);
                if (column) {
                    const project_task = column.project_task.find(({id}) => id === task.parent_id)
                    if (project_task && project_task.sub_task) {
                        let index = project_task.sub_task.findIndex(({id}) => id === task.id)
                        if (index === -1) {
                            project_task.sub_task.push(task);
                        }
                    }
                }
            }
            if (task.parent_id == state.projectOpenTask.id) {
                let index = state.projectOpenTask.sub_task.findIndex(({id}) => id === task.id)
                if (index === -1) {
                    state.projectOpenTask.sub_task.push(task);
                }
            }
            this.dispatch("getTaskBasic", task.parent_id);
        }
        this.dispatch("saveTask", task);
    },

    /**
     * 移除任务成功
     * @param state
     * @param data
     */
    taskRemoveSuccess(state, data) {
        const column = state.projectDetail.project_column.find(({id}) => id === data.column_id);
        if (column) {
            let index = column.project_task.findIndex(({id}) => id === data.id);
            if (index > -1) {
                column.project_task.splice(index, 1);
            }
        }
        if (data.id == state.projectOpenTask.id) {
            state.projectOpenTask = Object.assign({}, state.projectOpenTask, {_show: false});
        } else if (data.parent_id == state.projectOpenTask.id && state.projectOpenTask.sub_task) {
            let index = state.projectOpenTask.sub_task.findIndex(({id}) => id === data.id);
            if (index > -1) {
                state.projectOpenTask.sub_task.splice(index, 1)
            }
        }
        let index = state.calendarTask.findIndex(({id}) => id === data.id);
        if (index > -1) {
            state.calendarTask.splice(index, 1)
        }
        this.dispatch("getProjectBasic", data.project_id);
    }
}
