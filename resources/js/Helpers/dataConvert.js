export const convertData = (data) => {
    var newData = new Date(data);
    newData = newData.toLocaleDateString();
    return newData;
};
