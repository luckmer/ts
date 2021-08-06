const api: string = "https://optad360.mgr.consensu.org/cmp/v2/vendor-list.json";

const data: string[] = [];

const Data = async (api: string) => {
  try {
    const response = await fetch(`${api}`);
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
};

Data(api).then((res) => {
  const { vendors } = res;

  for (let key in vendors) {
    const result = vendors[key];
    data.push(result);
  }
  console.log(data);
});
