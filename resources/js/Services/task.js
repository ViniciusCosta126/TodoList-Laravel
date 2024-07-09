export const deleteTask = async (id) => {
    try {
        await axios.delete(`/api/tasks/${id}`);
        console.log(`Task ${id} deleted successfully`);
    } catch (error) {
        console.error(`Failed to delete task ${id}:`, error);
    }
};

export const updateTaskStatus = async (status, id) => {
    try {
        await axios.put(`/api/tasks/${id}`, {
            status: status,
        });
        console.log(`Task ${id} status updated to ${status}`);
    } catch (error) {
        console.error(`Failed to update task ${id} status:`, error);
    }
};
