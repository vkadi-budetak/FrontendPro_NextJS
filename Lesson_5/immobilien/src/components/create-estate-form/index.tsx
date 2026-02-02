"use client";

import {
  createRealEstate,
  type ActionState,
} from "@/app/actions/create-real-estate";
import { useActionState } from "react";

const initialState: ActionState = {};

export default function RealEstateForm() {
  const [state, action] = useActionState(createRealEstate, initialState);

  return (
    <form action={action} className="space-y-3">
      <input name="title" placeholder="Title" />
      {state.errors?.title && <p>{state.errors.title[0]}</p>}

      <input name="address" placeholder="Address" />
      {state.errors?.address && <p>{state.errors.address[0]}</p>}

      <input name="price" placeholder="Price" />
      {state.errors?.price && <p>{state.errors.price[0]}</p>}

      <button type="submit">Create</button>

      {state.success && <p>Created</p>}
    </form>
  );
}
