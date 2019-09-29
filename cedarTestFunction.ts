const audienceOverview = () => {
  const result = {
    totalActualReach: 0,
    totalPotentialReach: 0,
    ageGenderSummary: {},
    genderSummary: {},
    regionSummary: [],
    deviceSummary: {}
  };

  const appregration: any = {
    reachQueryResult: [{}],
    ageGenderQueryResult: [
      {
        ageGenderReaches: [{ age: "-" }],
        ageReaches: [],
        reach: 10,
        genderReaches: [{ reach: 10 }],
        regionReaches: [
          { reach: 10, region: 0 },
          { reach: 11, region: 1 },
          { reach: 12, region: 2 }
        ],
        deviceReaches: [{ reach: 10 }]
      }
    ]
  };
  const ageGenderSummary = {};
  const genderSummary = {};
  const deviceSummary = {};
  const regionSummary = new Map();

  const reachQueryResult = appregration.reachQueryResult[0];
  const ageGenderQueryResult = appregration.ageGenderQueryResult;

  let regionTotalReach = 0;

  result.totalActualReach = reachQueryResult.actualReach || 0;
  result.totalPotentialReach = reachQueryResult.potentialReach || 0;
  ageGenderQueryResult.forEach(data => {
    // process age-gender reaches
    [...data.ageGenderReaches, ...data.ageReaches].forEach(record => {
      const ageRanger = record.age.replace("-", "to"); // symbol - is acceptable as a JSON
      if (!ageGenderSummary[data.channelNme]) {
        ageGenderSummary[data.channelNme] = {};
      }
      if (!ageGenderSummary[data.channelNme][ageRanger]) {
        ageGenderSummary[data.channelNme][ageRanger] = {};
      }
      if (!ageGenderSummary[data.channelNme][ageRanger][record.gender]) {
        ageGenderSummary[data.channelNme][ageRanger][record.gender] = 0;
      }
      ageGenderSummary[data.channelNme][ageRanger][record.gender] =
        ageGenderSummary[data.channelNme][ageRanger][record.gender] +
        parseInt(record.reach, 0);
    });

    // process gender reaches
    data.genderReaches.forEach(record => {
      if (!genderSummary[record.gender]) {
        genderSummary[record.gender] = 0;
      }
      genderSummary[record.gender] =
        genderSummary[record.gender] + parseInt(record.reach, 0);
    });

    // process region summary
    data.regionReaches.forEach(record => {
      console.log(`record: ${JSON.stringify(record)}`);
      if (!regionSummary.has(record.region)) {
        regionSummary.set(record.region, 0);
      }
      regionTotalReach = regionTotalReach + parseInt(record.reach, 0);
      console.log(`set : ${record.region}`);
      regionSummary.set(
        record.region,
        regionSummary.get(record.region) + parseInt(record.reach, 0)
      );
      console.log(`regionSummary: ${JSON.stringify(regionSummary)}`);
    });

    // process device summary
    data.deviceReaches.forEach(record => {
      if (!deviceSummary[record.devicePlatform]) {
        deviceSummary[record.devicePlatform] = { total: 0 };
      }
      if (!deviceSummary[record.devicePlatform][record.impressionDevice]) {
        deviceSummary[record.devicePlatform][record.impressionDevice] = 0;
      }
      deviceSummary[record.devicePlatform].total =
        deviceSummary[record.devicePlatform].total + parseInt(record.reach, 0);
      deviceSummary[record.devicePlatform][record.impressionDevice] =
        deviceSummary[record.devicePlatform][record.impressionDevice] +
        parseInt(record.reach, 0);
    });
  });

  // convert MAP to Array for sorting
  const regionSummaryList = Array.from(
    regionSummary,
    (record: [string, number]) => {
      return {
        name: record[0],
        value: record[1],
        percentage: (record[1] / regionTotalReach).toFixed(5)
      };
    }
  );
  result.ageGenderSummary = ageGenderSummary;
  result.genderSummary = genderSummary;
  // DESC sorting
  debugger;
  regionSummaryList.sort((a: any, b: any) => {
    console.log("come in ", a, b);
    console.log(a.value, b.value);
    return b.value - a.value;
  });
  result.regionSummary = regionSummaryList.slice(0, 6);
  result.deviceSummary = deviceSummary;
  return result;
};

console.log(audienceOverview());
