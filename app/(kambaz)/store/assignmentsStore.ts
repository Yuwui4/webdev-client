"use client";

import { create } from "zustand";
import assignmentsJson from "../database/assignments.json";

export type Assignment = (typeof assignmentsJson)[number];

const emptyAssignment: Assignment = {
  _id: "0",
  title: "New Assignment",
  course: "",
  description: "New Assignment Description",
  points: 100,
  due: "",
  available: "",
  availableUntil: "",
};

type AssignmentsStore = {
  assignments: Assignment[];
  addAssignment: (assignment: Assignment) => void;
  deleteAssignment: (assignmentId: string) => void;
  updateAssignment: (assignment: Assignment) => void;
  setAssignments: (assignments: Assignment[]) => void;
};

export const useAssignmentsStore = create<AssignmentsStore>((set) => ({
  assignments: assignmentsJson,

  // addAssignment: (assignment) =>
  //   set((state) => ({
  //     assignments: [
  //       ...state.assignments,
  //       { ...emptyAssignment, ...assignment, _id: crypto.randomUUID() },
  //     ],
  //   })),

  addAssignment: (assignment) =>
    set((state) => ({
      assignments: [...state.assignments, assignment],
    })),

  deleteAssignment: (assignmentId) =>
    set((state) => ({
      assignments: state.assignments.filter((assignment) => assignment._id !== assignmentId),
    })),

  updateAssignment: (assignment) =>
    set((state) => ({
      assignments: state.assignments.map((a) => a._id === assignment._id ? assignment : a),
    })),

  setAssignments: (assignments) => set({ assignments }),
}));

export { emptyAssignment };