import data from "./data/data";

export type data_stru = {
  id: number;
  province_id: string;
  district_id: string;
  district_name: string;
  municipality_name: string;
  municipality_name_np: string;
  type: string;
  total_no_of_wards: string;
};

const province_1 = data.filter((e: data_stru) => e.province_id === "1");
const province_2 = data.filter((e: data_stru) => e.province_id === "2");
const province_3 = data.filter((e: data_stru) => e.province_id === "3");
const province_4 = data.filter((e: data_stru) => e.province_id === "4");
const province_5 = data.filter((e: data_stru) => e.province_id === "5");
const province_6 = data.filter((e: data_stru) => e.province_id === "6");
const province_7 = data.filter((e: data_stru) => e.province_id === "7");

export const get_district_in_province = (province_no: number) => {
  switch (province_no) {
    case 1:
      return Array.from(
        province_1
          .reduce(
            (map, obj: data_stru) => map.set(obj.district_name, obj),
            new Map()
          )
          .values()
      );
    case 2:
      return Array.from(
        province_2
          .reduce(
            (map, obj: data_stru) => map.set(obj.district_name, obj),
            new Map()
          )
          .values()
      );
    case 3:
      return Array.from(
        province_3
          .reduce(
            (map, obj: data_stru) => map.set(obj.district_name, obj),
            new Map()
          )
          .values()
      );
    case 4:
      return Array.from(
        province_4
          .reduce(
            (map, obj: data_stru) => map.set(obj.district_name, obj),
            new Map()
          )
          .values()
      );
    case 5:
      return Array.from(
        province_5
          .reduce(
            (map, obj: data_stru) => map.set(obj.district_name, obj),
            new Map()
          )
          .values()
      );
    case 6:
      return Array.from(
        province_6
          .reduce(
            (map, obj: data_stru) => map.set(obj.district_name, obj),
            new Map()
          )
          .values()
      );
    case 7:
      return Array.from(
        province_7
          .reduce(
            (map, obj: data_stru) => map.set(obj.district_name, obj),
            new Map()
          )
          .values()
      );
    default:
      return [];
  }
};

export const get_city_in_district = (province_no: number, district: string) => {
  switch (province_no) {
    case 1:
      return province_1.filter((e: data_stru) => e.district_name === district);
    case 2:
      return province_2.filter((e: data_stru) => e.district_name === district);
    case 3:
      return province_3.filter((e: data_stru) => e.district_name === district);
    case 4:
      return province_4.filter((e: data_stru) => e.district_name === district);
    case 5:
      return province_5.filter((e: data_stru) => e.district_name === district);
    case 6:
      return province_6.filter((e: data_stru) => e.district_name === district);
    case 7:
      return province_7.filter((e: data_stru) => e.district_name === district);
    default:
      return [];
  }
};
export const get_details_of_city = (
  province_no: number,
  district: string,
  muni: string
) => {
  const data = get_city_in_district(province_no, district);
  if (data.length) {
    return data.filter((e: data_stru) => e.municipality_name === muni);
  }
  return [];
};

