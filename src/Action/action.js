export const getImgData = (data) => {
    return {
        type: 'IMGTYPE',
        payload: data?.results,
    }
}