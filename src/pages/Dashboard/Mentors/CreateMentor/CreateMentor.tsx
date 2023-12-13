import { Button } from "antd";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function CreateMentor() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl  font-semibold mb-8 ">Mentors</h1>
        <Link to="/mentor/add">
          <Button
            style={{
              color: "white",
            }}
            size="large"
            className="flex items-center font-semibold bg-customPrimary"
            icon={<FiPlus />}
          >
            Add Mentor
          </Button>
        </Link>
      </div>
    </div>
  );
}
