import { fetchGoogleSheetsData } from "google-sheets-data-fetcher";

export async function getBlogs() {
  const fetchBlogSheet = fetchGoogleSheetsData(
    [
      {
        sheetId: import.meta.env.VITE_SHEETID,
        subSheetsIds: [
          import.meta.env.VITE_BLOGSSUBSHEETSID
        ],
      },
    ],
    ["JSON_RAW"]
  );

  try {
    const value = await fetchBlogSheet;
    var blogKeys = [];
    const blogData = [];
    // console.log(value.table);
    value.table.rows.forEach((row, index) => {
      if (index === 0) {
        blogKeys = Object.values(row['c']);
      } else {
        const blog = {};
        const blogValues = Object.values(row['c']);
        // console.log(blogValues);
        for (let i = 0; i < blogValues.length; i++) {
          if (blogKeys[i]['v'] === 'CreationDateTime') {
            blog[blogKeys[i]['v']] = getTimeAgo(new Date(blogValues[i]['v']));
          } else {
            blog[blogKeys[i]['v']] = blogValues[i]['v'];
          }

        }
        blogData.push(blog);
      }

    });
    return blogData;
  } catch {
    return [];
  }
}

function getTimeAgo(publishedDateTime) {
  const currentDateTime = new Date();
  const timeDifference = currentDateTime - publishedDateTime;
  const milliseconds = timeDifference;
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30.44); // Approximation of the average number of days in a month
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `${years} year${years > 1 ? 's' : ''} ago`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
    return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
  }
}
