import Button from "@/components/global/Button";
import React from "react";

const page = () => {
  return (
    <div className="p-10 flex flex-col gap-10">
      <div className="flex items-center">
        <Button size="lg" primary>
          Primary lg
        </Button>
        <Button size="lg" success>
          Success lg
        </Button>
        <Button size="lg" danger>
          Danger lg
        </Button>
      </div>

      <div className="flex items-center">
        <Button primary>Primary default md</Button>
        <Button success>Success default md</Button>
        <Button danger>Danger default md</Button>
      </div>

      <div className="flex items-center">
        <Button size="sm" primary>
          Primary sm
        </Button>
        <Button size="sm" success>
          Success sm
        </Button>
        <Button size="sm" danger>
          Danger sm
        </Button>
      </div>
    </div>
  );
};

export default page;
