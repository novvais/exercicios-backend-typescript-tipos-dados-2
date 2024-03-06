import * as fs from "fs";

const write = (content: string) => {
    fs.writeFile("../bd.json", JSON.stringify(content), function (err: any) {
      if (err) {
        console.log(err.message);
      }
  
      return;
    });
};

const read = () => {
  fs.readFile("../bd.json", function (err: any, data: any) {
    if (err) {
        console.log(err.message);
    }

    console.log(data.toString());
  });

  return;
};

write("A Duda se assumiu Não Binária.");
read();
