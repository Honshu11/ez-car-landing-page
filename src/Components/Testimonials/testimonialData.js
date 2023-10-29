import { fetchGoogleSheetsData } from "google-sheets-data-fetcher";

export async function getTestimonials() {
  const fetchTestimonialSheet = fetchGoogleSheetsData(
    [
      {
        sheetId: import.meta.env.VITE_SHEETID,
        subSheetsIds: [
          import.meta.env.VITE_TESTIMONIALSSUBSHEETSID
        ],
      },
    ],
    ["JSON_RAW"]
  );

  try {
    const value = await fetchTestimonialSheet;
    var testimonialsKeys = [];
    const testimonialsData = [];
    // console.log(value.table);
    value.table.rows.forEach((row, index) => {
      if (index === 0) {
        testimonialsKeys = Object.values(row['c']);
      } else {
        const testimonial = {};
        const testimonialInfo = Object.values(row['c']);
        // console.log(testimonialInfo);
        for (let i = 0; i < testimonialInfo.length; i++) {
            testimonial[testimonialsKeys[i]['v']] = testimonialInfo[i]['v'];
        }
        testimonialsData.push(testimonial);
      }

    });
    console.log()
    return testimonialsData;
  } catch {
    return [];
  }
}


