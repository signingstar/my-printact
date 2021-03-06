const PrintData:{[key: string]: any} = {
  "type":{
    "visiting_card": {
      "label": "Visiting Cards",
      "size": ["s-1", "m-1"],
      "material": ["p-1", "p-2"],
      "coat": ["c-1", "c-2", "c-3", "c-4", "c-5"],
      "quantity": ["q-2", "q-3"]
    },
    "stationary": {
      "label": "Stationary",
      "size": ["m-1", "l-1"],
      "material": ["p-3", "p-4"],
      "coat": ["c-1", "c-2", "c-4"],
      "quantity": ["q-1", "q-2", "q-3", "q-4"]
    },
    "broucher": {
      "label": "Brouchers",
      "size": ["m-1"],
      "material": ["p-1", "p-2"],
      "coat": ["c-1", "c-4"],
      "quantity": ["q-2", "q-3"]
    },
    "flyer": {
      "label": "Flyers",
      "size": ["m-1"],
      "material": ["p-1"],
      "coat": ["c-2"],
      "quantity": ["q-2", "q-3"]
    },
    "t_shirts": {
      "label": "T-Shirts",
      "size": ["s-1", "l-1"],
      "material": ["p-1", "p-2"],
      "coat": ["c-3", "c-4"],
      "quantity": ["q-3"]
    },
    "posters": {
      "label": "Posters",
      "size": ["m-1", "l-1", "xl-1"],
      "material": ["p-2", "p-3", "p-4"],
      "coat": ["c-1", "c-4"],
      "quantity": ["q-3", "q-4"]
    }
  },
  "size": {
    "s-1": {
      "label": "2' x 3'",
      "material": ["p-1"]
    },
    "m-1": {
      "label": "4' x 7'"
    },
    "l-1": {
      "label": "10' x 17'"
    },
    "xl-1": {
      "label": "30' x 50'"
    }
  },

  "material": {
    "p-1": {
      "label": "Glossy paper"
    },
    "p-2": {
      "label": "Plain Cloth"
    },
    "p-3": {
      "label": "Shiny Cardboard"
    },
    "p-4": {
      "label": "Thick wood"
    }
  },

  "coat": {
    "c-1": {
      "label": "Gloss"
    },
    "c-2": {
      "label": "UV coating"
    },
    "c-3": {
      "label": "Velvet"
    },
    "c-4": {
      "label": "Matt"
    },
    "c-5": {
      "label": "3D"
    }
  },

  "quantity": {
    "q-1": {
      "label": "1 - 10"
    },
    "q-2": {
      "label": "10 - 50",
    },
    "q-3": {
      "label": "50 - 500"
    },
    "q-4": {
      "label": "500 - 2000"
    }
  }
}

export default PrintData;
