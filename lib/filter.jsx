
export const filterHomes = async ({ photo, filters }) => {

  if (filters.priceRange[0] < photo.price && filters.priceRange[1] > photo.price) {
    if (filters.activeBedroom === photo.bedrooms || filters.activeBedroom === 0) {
      if (filters.activeBeds === photo.beds || filters.activeBeds === 0) {
        if (filters.activeBath === photo.baths || filters.activeBath === 0) {
          if ((filters.typeOfPlace.allPlace && photo.typeOfPlace === ('allPlace')) || !(filters.typeOfPlace.allPlace)) {
            if ((filters.typeOfPlace.share && photo.typeOfPlace === ('share')) || !(filters.typeOfPlace.share)) {
              if ((filters.typeOfPlace.private && photo.typeOfPlace === ('private')) || !(filters.typeOfPlace.private)) {
                if ((filters.typeOfHome.home && photo.typeOfHome === ('home')) || !(filters.typeOfHome.home)) {
                  if ((filters.typeOfHome.apartment && photo.typeOfHome === ('apartment')) || !(filters.typeOfHome.apartment)) {
                    if ((filters.typeOfHome.guest && photo.typeOfHome === ('guest')) || !(filters.typeOfHome.guest)) {
                      if ((filters.typeOfHome.hotel && photo.typeOfHome === ('hotel')) || !(filters.typeOfHome.hotel)) {
                        if ((filters.instantBook === photo.instantBook) || !(filters.instantBook)) {
                          if ((filters.selfEnter === photo.selfEnter) || !(filters.selfEnter)) {
                            if ((filters.freeCancel === photo.freeCancel) || !(filters.freeCancel)) {
                              if ((filters.superHost === photo.superHost) || !(filters.superHost)) {
                                if ((filters.airbnbPlus === photo.airbnbPlus) || !(filters.airbnbPlus)) {
                                  if ((filters.language.turkish && photo.language === ('turkish')) || !(filters.language.turkish)) {
                                    if ((filters.language.english && photo.language === ('english')) || !(filters.language.english)) {
                                      if ((filters.language.french && photo.language === ('french')) || !(filters.language.french)) {
                                        if ((filters.language.japanese && photo.language === ('japanese')) || !(filters.language.japanese)) {
                                          if (checkFacilities({ photo: photo, filters: filters }))
                                            if (checkAccessibility({ photo: photo, filters: filters })) {
                                              return true
                                            }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    return false
  }
}

const checkFacilities = ({ photo, filters }) => {
  let wifi = false;
  let kitchen = false;
  let washing_machine = false;
  let air_conditioning = false;
  let dryer = false;
  let heating = false;
  if (!filters.facilities.wifi || ((filters.facilities.wifi && photo.facilities.includes('wifi')))) {
    wifi = true
  }
  if (!filters.facilities.kitchen || ((filters.facilities.kitchen && photo.facilities.includes('kitchen')))) {
    kitchen = true
  }
  if (!filters.facilities.washing_machine || ((filters.facilities.washing_machine && photo.facilities.includes('washing_machine')))) {
    washing_machine = true
  }
  if (!filters.facilities.air_conditioning || ((filters.facilities.air_conditioning && photo.facilities.includes('air_conditioning')))) {
    air_conditioning = true
  }
  if (!filters.facilities.dryer || ((filters.facilities.dryer && photo.facilities.includes('dryer')))) {
    dryer = true
  }
  if (!filters.facilities.heating || ((filters.facilities.heating && photo.facilities.includes('heating')))) {
    heating = true
  }

  if (wifi && kitchen && washing_machine && air_conditioning && dryer && heating) {
    return true
  } else {
    return false
  }
}
const checkAccessibility = ({ photo, filters }) => {
  let steplessEnter = false;
  let cm81 = false;
  let disabledParking = false;
  let steplessWat = false;

  if (!filters.accessibility.steplessEnter || (filters.accessibility.steplessEnter && photo.accessibility.includes('steplessEnter'))) {
    steplessEnter = true
  }
  if (!filters.accessibility.cm81 || (filters.accessibility.cm81 && photo.accessibility.includes('81cm'))) {
    cm81 = true
  }
  if (!filters.accessibility.disabledParking || (filters.accessibility.disabledParking && photo.accessibility.includes('disabledParking'))) {
    disabledParking = true
  }
  if (!filters.accessibility.steplessWat || (filters.accessibility.steplessWat && photo.accessibility.includes('steplessWat'))) {
    steplessWat = true
  }
  if (steplessEnter && cm81 && disabledParking && steplessWat) {
    return true
  } else {
    return false
  }
}