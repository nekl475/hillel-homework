let data = [
    [`Project Brief`, [
        [`Project Documents`],
        [`Project Goals`, [`Design brand identity`, `Design mobile app`, `Design web app`, `Design marketing website`], `checkbox`],
        [
            `Success Metrics`, [
                `The brand would be distinctive and easily recognizable by potential users`,
                `The web/mobile applications would be user friendly and easy to navigate`,
                `The website would provide all information needed for the user to get started`,
                `The business objectives for the platform would be reached`
            ],
            `checkbox`
        ],
    ]],
    [
        `Brand Identity`, [
            [`Strategy Document`],
            [
                `Design Deliverables`, [
                    `Logo`,
                    `Typeface`,
                    `Colour`
                ],
                `radio`
            ],
            [
                `Brand Guidelines`
            ],
        ]
    ],
    [
        `Product Design`, [
            [
                `User Research`,
                `A preliminary research stage to discover the user goals and business objectives, analyze competitors, and define the product solution clearly.`
            ],
            [
                `Information Architecture`,
                `This is used to determine the number of views to design and how the user can navigate through the platform.`
            ],
            [
                `Wireframes`,
                `Preliminary sketches to determine the structure of content on each section of the platform.`
            ],
        ]
    ],
    [
        `Marketing Website`, [
            [`Sitemap`],
            [`Wireframes`],
            [`Visual Design`]
        ]
    ]
];


function getListik(arr) {
    let listik = arr.map(function(item) {
        listTest = [];
        listTest.push(item[1]);
        return listTest;
    });
    return listik;
}

let listik = getListik(data);
let litData = getList(listik);
let type = typeChack(listik);

function getList(listik) {

    let listFirst = listik.map(function(item) {
        let newList = item[0][0][0];
        return newList;
    });
    let listSec = listik.map(function(item) {

        return item[0][1][0];
    });
    let listThird = listik.map(function(item) {
        return item[0][2][0];
    });
    let array = [listFirst, listSec, listThird];
    return array;
}

function getData(arr) {
    let listMenu = arr.map(function(item) {
        let arrow = [];
        for (let i = 0; i < 3; i++) {
            let newList = ` 
			<div class="fw-bold">${item[i]}</div>`;
            arrow.push(newList);
        }
        return arrow;
    });
    return listMenu;
}

let title = getData(litData);
let title1 = [title[0][0], title[1][0], title[2][0]];
let title2 = [title[0][1], title[1][1], title[2][1]];
let title3 = [title[0][2], title[1][2], title[2][2]];
let FullTitl = [title1, title2, title3];
let EndTitl = FullTitl.flat();


function getTitle(arr) {

    let title = arr.map(function(el) {
        let titlePush = [];
        titlePush.push(el[0]);
        return titlePush;
    });
    return title;

}

let titleTable = getTitle(data);

function getImage(title) {
    let image = title.map(function(item) {
        let term = item.join();
        let interm = term.replace(' ', '');
        let alimage = `<img src="images/${interm}.jpeg" class="card-img-top" alt="${interm}"> `;
        return alimage;
    });


    return image;
}

let tableName = getTiltTable(titleTable);



let image = getImage(titleTable);



function getTiltTable(title) {
    let titleTab = title.map(function(item) {
        let x = ` <h5 class="card-title">${item}</h5>`;
        return x;
    });
    return titleTab;
}


let check = listik.map(function(item) {

    return item[0][1][1];
});
let checkTwo = listik.map(function(item) {
    return item[0][2][1];
});

let checkThree = listik.map(function(item) {
    return item[0][1][1];
});
let checkFour = listik.map(function(item) {

    let newArr = [item[0][0][1], item[0][1][1],
        item[0][2][1]
    ];
    let newA = newArr.flat();
    return newA;
});
let checkFive = listik.map(function(item) {
    let newArr = [item[0][0], item[0][1], item[0][2]]
    return newArr;
});

let checkA = nextCheckBox(check[0]);
let checkB = nextCheckBox(checkTwo[0]);
let radio = nextCheckBox(checkThree[1]);
let text = checkFour[2];
let tableFour = getData(checkFive[3]);



function typeChack(arr) {
    let check = arr.map(function(item) {

        return item[0][1][2];
    });
    return check;
}




function arrLen(arr) {
    let number = arr.length;
    return `<span class="badge bg-primary rounded-pill">${number}</span>`;
}
lenA = arrLen(check[0]);
lenB = arrLen(checkTwo[0]);
lenС = arrLen(checkThree[1]);

function nextCheckBox(arr) {
    let string = '';
    for (let i = 0; i < arr.length; i++) {
        string += `<div class="form-check">
      <input class="form-check-input" type="${arr.length<4 ? type[1] : type[0]}" name="${arr.length>3 && i==0 ? 'project_goals':(arr.length>3 && i==1)?'success_metrics' : 'design_deliverables'}" 
      id="${arr.length>3 && i==0 ? 'project_goals':(arr.length>3 && i==1)?'success_metrics' : 'design_deliverables'}-${i}">
      <label class="form-check-label" for="${arr.length>3 && i==0 ? 'project_goals':(arr.length>3 && i==1)?'success_metrics' : 'design_deliverables'}-${i}">
        ${arr[i]}
    </label>
    </div>`;

    }
    return string;
}


function checkCycle(i) {

    switch (i) {
        case 1:
            return checkA;
        case 2:
            return checkB;
        case 4:
            return radio;
        case 6:
            return text[0];
        case 7:
            return text[1];
        case 8:
            return text[2];
        case 9:
            return tableFour[0][0];
        case 10:
            return tableFour[1][0];
        case 11:
            return tableFour[2][0];
        default:
            return ` `;
    }

}

function checkLen(i) {
    if (i == 1) {
        return lenA;
    } else if (i == 2) { return lenB; } else if (i == 4) { return lenС; } else { return ` `; }
}


let listTable = ``;
for (let i = 0; i < 3; i++) {

    listTable += `
    <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
       ${EndTitl[i]}
       ${checkCycle(i)}
       </div>
       ${checkLen(i)}
    </li>
    
`;
}
let listTable1 = ``;
for (let i = 3; i < 6; i++) {

    listTable1 += `
    <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
       ${EndTitl[i]}
       ${checkCycle(i)}
       </div>
       ${checkLen(i)}
    </li>
    
`;
}

let listTable2 = ``;
for (let i = 6; i < 9; i++) {

    listTable2 += `
    <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
       ${EndTitl[i]}
       ${checkCycle(i)}
       </div>
    </li>
    
`;
}
let listTable3 = ``;
for (let i = 9; i < 12; i++) {

    listTable3 += `
    <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
       ${checkCycle(i)}
       </div>
      
    </li>
    
`;
}
let rock = [
    [listTable],
    [listTable1],
    [listTable2],
    [listTable3]
];
let table = ``;
for (let i = 0; i <= 3; i++) {
    table += `<div class="col-sm-12 col-md-6 col-lg-3 p-3">
     <div class="card">
     ${image[i]}
     <div class="card-body">
     ${tableName[i]}
     <ol class="list-group list-group-numbered">
     ${rock[i]}

     </ol>
     </div>
     </div>
     </div>`;

}


document.write(`<div class="container">
    <div class="row">
    
${table}

    </div>
    </div>
    `);