"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hydrateUser} from "../../store/features/auth.slice";
import {getStoredUser} from "./storage";

export default function AuthInitializer() {
  const dispatch = useDispatch();
  const { hydrated } = useSelector((s) => s.auth);

  useEffect(() => {
    if (!hydrated) {
      const stored = getStoredUser();
      dispatch(hydrateUser(stored));
    }
  }, [dispatch, hydrated]);

  return null;
}
