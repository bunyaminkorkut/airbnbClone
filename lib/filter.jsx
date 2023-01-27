
export const filterHomes = async ({ photo, filters }) => {

  if (filters.priceRange[0] < photo.price && filters.priceRange[1] > photo.price) {
    if (filters.activeBedroom === photo.bedrooms || filters.activeBedroom === 0) {
      if (filters.activeBeds === photo.beds || filters.activeBeds === 0) {
        if (filters.activeBath === photo.baths || filters.activeBath === 0) {
          if ((filters.typeOfPlace.allPlace && photo.typeOfPlace.includes('allPlace')) || !(filters.typeOfPlace.allPlace && filters.typeOfPlace.share && filters.typeOfPlace.private)) {
            if ((filters.typeOfPlace.share && photo.typeOfPlace.includes('share')) || !(filters.typeOfPlace.allPlace && filters.typeOfPlace.share && filters.typeOfPlace.private)) {
              if ((filters.typeOfPlace.private && photo.typeOfPlace.includes('private')) || !(filters.typeOfPlace.allPlace && filters.typeOfPlace.share && filters.typeOfPlace.private)) {
                if ((filters.typeOfHome.home && photo.typeOfHome.includes('home')) || !(filters.typeOfHome.home && filters.typeOfHome.home && filters.typeOfHome.home && filters.typeOfHome.hotel)) {
                  if ((filters.typeOfHome.apartment && photo.typeOfHome.includes('apartment')) || !(filters.typeOfHome.allPlace && filters.typeOfHome.share && filters.typeOfHome.private)) {
                    if ((filters.typeOfHome.guest && photo.typeOfHome.includes('guest')) || !(filters.typeOfHome.home && filters.typeOfHome.home && filters.typeOfHome.home && filters.typeOfHome.hotel)) {
                      if ((filters.typeOfHome.hotel && photo.typeOfHome.includes('hotel')) || !(filters.typeOfHome.home && filters.typeOfHome.home && filters.typeOfHome.home && filters.typeOfHome.hotel)) {
                        if ((filters.facilities.wifi && photo.facilities.includes('wifi')) || !(filters.facilities.wifi && filters.facilities.kitchen && filters.facilities.washing_machine && filters.facilities.air_conditioning && filters.facilities.dryer && filters.facilities.heating)) {
                          if ((filters.facilities.kitchen && photo.facilities.includes('kitchen')) || !(filters.facilities.wifi && filters.facilities.kitchen && filters.facilities.washing_machine && filters.facilities.air_conditioning && filters.facilities.dryer && filters.facilities.heating)) {
                            if ((filters.facilities.washing_machine && photo.facilities.includes('washing_machine')) || !(filters.facilities.wifi && filters.facilities.kitchen && filters.facilities.washing_machine && filters.facilities.air_conditioning && filters.facilities.dryer && filters.facilities.heating)) {
                              if ((filters.facilities.air_conditioning && photo.facilities.includes('air_conditioning')) || !(filters.facilities.wifi && filters.facilities.kitchen && filters.facilities.washing_machine && filters.facilities.air_conditioning && filters.facilities.dryer && filters.facilities.heating)) {
                                if ((filters.facilities.dryer && photo.facilities.includes('dryer')) || !(filters.facilities.wifi && filters.facilities.kitchen && filters.facilities.washing_machine && filters.facilities.air_conditioning && filters.facilities.dryer && filters.facilities.heating)) {
                                  if ((filters.facilities.heating && photo.facilities.includes('heating')) || !(filters.facilities.wifi && filters.facilities.kitchen && filters.facilities.washing_machine && filters.facilities.air_conditioning && filters.facilities.dryer && filters.facilities.heating)) {
                                    if ((filters.instantBook === photo.instantBook) || !(filters.instantBook && filters.selfEnter && filters.freeCancel)) {
                                      if ((filters.selfEnter === photo.selfEnter) || !(filters.instantBook && filters.selfEnter && filters.freeCancel)) {
                                        if ((filters.selfEnter === photo.selfEnter) || !(filters.instantBook && filters.selfEnter && filters.freeCancel)) {
                                          if ((filters.accessibility.steplessEnter && photo.accessibility.includes('steplessEnter')) || !(filters.accessibility.steplessEnter && filters.accessibility.cm81 && filters.accessibility.disabledParking && filters.accessibility.steplessWat)) {
                                            if ((filters.accessibility.cm81 && photo.accessibility.includes('81cm')) || !(filters.accessibility.steplessEnter && filters.accessibility.cm81 && filters.accessibility.disabledParking && filters.accessibility.steplessWat)) {
                                              if ((filters.accessibility.disabledParking && photo.accessibility.includes('disabledParking')) || !(filters.accessibility.steplessEnter && filters.accessibility.cm81 && filters.accessibility.disabledParking && filters.accessibility.steplessWat)) {
                                                if ((filters.accessibility.steplessWat && photo.accessibility.includes('steplessWat')) || !(filters.accessibility.steplessEnter && filters.accessibility.cm81 && filters.accessibility.disabledParking && filters.accessibility.steplessWat)) {
                                                  if ((filters.superHost === photo.superHost) || !(filters.superHost && filters.airbnbPlus)) {
                                                    if ((filters.airbnbPlus === photo.airbnbPlus) || !(filters.superHost && filters.airbnbPlus)) {
                                                      if ((filters.language.turkish && photo.language.includes('turkish')) || !(filters.language.turkish && filters.language.english && filters.language.french && filters.language.japanese)) {
                                                        if ((filters.language.english && photo.language.includes('english')) || !(filters.language.turkish && filters.language.english && filters.language.french && filters.language.japanese)) {
                                                          if ((filters.language.french && photo.language.includes('french')) || !(filters.language.turkish && filters.language.english && filters.language.french && filters.language.japanese)) {
                                                            if ((filters.language.japanese && photo.language.includes('japanese')) || !(filters.language.turkish && filters.language.english && filters.language.french && filters.language.japanese)) {
                                                              console.log('okay');
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