import React from "react";

export type TypeItem = {
    id: string,
    location: string,
    breed: string,
    name: string,
    ref: string
}

type ListDogProps = {
    dogs: Array<TypeItem>;
    ChoiceDetails?: (details: string) => void
};

export default function Display({ dogs }: ListDogProps) {
    return (
        <div>
            {dogs.map((item) => <img width={100} height={100} src={item.ref} alt="dog" />)}
        </div>
    );
}