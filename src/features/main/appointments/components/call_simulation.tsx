import { Icon } from "@iconify/react";
import React from "react";
import { callSimulation } from "../../../../cores/variables/call_simulation";
import type { CallSimulationType } from "../../../../cores/types/call_simulation_type";

export const CallSimulation = ({ isOpen }: { isOpen: boolean }) => {
  const [transcripts, setTranscripts] = React.useState<CallSimulationType | undefined>();

  React.useEffect(() => {
    console.log(isOpen);
    if (isOpen) {
      handleTranscript();
    }
  }, [isOpen]);

  const handleTranscript = async () => {
    for (let index = 0; index < callSimulation.length; index++) {
      setTranscripts(callSimulation[index]);
      await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 5000) + 1)); // Simulate delay
    }
  }

  return (
    <div id="call-simulation" className="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabIndex={-1} aria-labelledby="call-simulation-label">
      <div className="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-sm sm:w-full m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center">
        <div className="w-full flex items-center flex-col bg-slate-900 shadow-2xs rounded-xl pointer-events-auto py-4">
          <div className="p-4 overflow-y-auto space-y-4 text-center">
            <img className="inline-block size-16 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Avatar" />
            <p className="-mt-3 text-lg font-bold text-neutral-300">
              John Doe
            </p>
            <p className="mt-1 text-sm text-neutral-300">
              Calling...
            </p>

            <div className={`-mt-2 w-full ${transcripts?.isMe ? 'bg-slate-800 text-neutral-300' : 'bg-green-900 text-green-300'} text-sm rounded-lg py-2 px-4`} role="alert" tabIndex={-1} aria-labelledby="hs-soft-color-dark-label">
              {transcripts?.transcript}
            </div>

            <div className="flex items-center justify-center gap-x-5 mt-12">
              <button type="button" className="py-4 px-4 cursor-pointer inline-flex items-center gap-x-2 text-sm font-medium rounded-full bg-slate-800 text-gray-400 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                <Icon icon="el:speaker" className="size-4" />
              </button>
              <button type="button" className="py-4 px-4 cursor-pointer inline-flex items-center gap-x-2 text-sm font-medium rounded-full bg-red-500 text-white shadow-2xs hover:bg-red-400 focus:outline-hidden focus:bg-red-400 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-static-backdrop-modal">
                <Icon icon="mdi:phone-hangup" className="size-10" />
              </button>
              <button type="button" className="py-4 px-4 cursor-pointer inline-flex items-center gap-x-2 text-sm font-medium rounded-full bg-slate-800 text-gray-400 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                <Icon icon="mdi:microphone" className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}