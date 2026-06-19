"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createProposalAction, generateWithAI } from "@/modules/proposal/server/proposal.actions";
import type { PaymentType } from "@/shared/types";

type Step = "project" | "scope" | "commercial" | "generating";

export default function NewProposalPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("project");
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [form, setForm] = useState({
    projectName: "",
    clientName: "",
    description: "",
    budget: 0,
    paymentType: "milestone_30_40_30" as PaymentType,
  });

  const updateField = (field: string, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };

  const handleGenerate = async () => {
    if (!form.projectName.trim() || !form.clientName.trim()) {
      setError("Project name and client name are required.");
      return;
    }
    if (!form.description.trim()) {
      setError("Please describe the work briefly.");
      return;
    }

    setStep("generating");
    setProgress(10);

    try {
      const created = await createProposalAction({
        projectName: form.projectName,
        clientName: form.clientName,
        description: form.description,
        budget: form.budget,
        paymentType: form.paymentType,
      });

      if (!created.success) {
        throw new Error(
          created.error ??
            "Could not save proposal. Database may not be configured."
        );
      }

      setProgress(40);

      const generated = await generateWithAI(created.id);
      if (!generated.success) {
        throw new Error(
          generated.error ?? "AI generation failed. Please try again."
        );
      }

      setProgress(100);
      router.push(`/proposals/${created.id}`);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      setError(message);
      setStep("commercial");
    }
  };

  if (step === "generating") {
    return (
      <div className="flex flex-col items-center justify-center py-24">
        <div className="h-2 w-full max-w-md overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-brand-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-4 text-sm text-gray-600">
          {progress < 50
            ? "Analyzing your project..."
            : "Writing your proposal..."}
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Create a professional proposal
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          It takes 2 minutes. AI writes everything for you.
        </p>
      </div>

      {/* Step indicator */}
      <div className="mb-8 flex items-center gap-2 text-sm">
        <span
          className={`rounded-full px-3 py-1 ${
            step === "project"
              ? "bg-brand-500 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Project
        </span>
        <span className="text-gray-300">→</span>
        <span
          className={`rounded-full px-3 py-1 ${
            step === "scope"
              ? "bg-brand-500 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Scope
        </span>
        <span className="text-gray-300">→</span>
        <span
          className={`rounded-full px-3 py-1 ${
            step === "commercial"
              ? "bg-brand-500 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Budget
        </span>
      </div>

      {error && (
        <div className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Step 1: Project Info */}
      {step === "project" && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Project name
            </label>
            <input
              type="text"
              value={form.projectName}
              onChange={(e) => updateField("projectName", e.target.value)}
              placeholder="e.g., Villa Interior Fit-out — Al Malqa"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              autoFocus
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Client name
            </label>
            <input
              type="text"
              value={form.clientName}
              onChange={(e) => updateField("clientName", e.target.value)}
              placeholder="e.g., Ahmed Al-Otaibi"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
          </div>
          <div className="pt-4">
            <button
              onClick={() => setStep("scope")}
              disabled={!form.projectName.trim() || !form.clientName.trim()}
              className="rounded-lg bg-brand-500 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-600 disabled:opacity-50"
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Scope */}
      {step === "scope" && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Describe the work
            </label>
            <textarea
              value={form.description}
              onChange={(e) => updateField("description", e.target.value)}
              placeholder="e.g., Interior fit-out of a 300sqm villa in Riyadh. Includes flooring, painting, kitchen cabinets, bathroom fixtures, and lighting installation."
              rows={5}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
            <p className="mt-1 text-xs text-gray-400">
              Write in Arabic or English. AI understands both.
            </p>
          </div>
          <div className="flex gap-3 pt-4">
            <button
              onClick={() => setStep("project")}
              className="rounded-lg border border-gray-300 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              ← Back
            </button>
            <button
              onClick={() => setStep("commercial")}
              disabled={!form.description.trim()}
              className="rounded-lg bg-brand-500 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-600 disabled:opacity-50"
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Commercial */}
      {step === "commercial" && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Total project budget (SAR)
            </label>
            <input
              type="number"
              value={form.budget || ""}
              onChange={(e) =>
                updateField("budget", Number(e.target.value))
              }
              placeholder="e.g., 185000"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Payment structure
            </label>
            <select
              value={form.paymentType}
              onChange={(e) =>
                updateField("paymentType", e.target.value)
              }
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            >
              <option value="milestone_30_40_30">
                30% Down — 40% Delivery — 30% Handover
              </option>
              <option value="monthly">Monthly installments</option>
              <option value="fixed">Fixed on completion</option>
              <option value="custom">Custom schedule</option>
            </select>
          </div>
          <div className="flex gap-3 pt-4">
            <button
              onClick={() => setStep("scope")}
              className="rounded-lg border border-gray-300 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              ← Back
            </button>
            <button
              onClick={handleGenerate}
              className="rounded-lg bg-brand-500 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-600"
            >
              ✨ Generate Proposal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
