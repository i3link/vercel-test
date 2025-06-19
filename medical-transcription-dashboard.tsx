"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Mic,
  MicOff,
  Play,
  Pause,
  Calendar,
  Pill,
  FileText,
  ChevronDown,
  ChevronUp,
  Heart,
  Activity,
} from "lucide-react"

export default function MedicalTranscriptionDashboard() {
  const [isRecording, setIsRecording] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [expandedMeds, setExpandedMeds] = useState(false)
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null)
  const [showTimeline, setShowTimeline] = useState(false)

  const currentlyDiscussedMed = "Sertraline"

  const medications = [
    { name: "Sertraline", dose: "50mg", frequency: "Daily", route: "PO", indication: "Depression", discussed: true },
    { name: "Ibuprofen", dose: "400mg", frequency: "PRN", route: "PO", indication: "Pain", discussed: false },
    { name: "Metformin", dose: "500mg", frequency: "BID", route: "PO", indication: "Diabetes", discussed: false },
    { name: "Lisinopril", dose: "10mg", frequency: "Daily", route: "PO", indication: "Hypertension", discussed: false },
    { name: "Atorvastatin", dose: "20mg", frequency: "HS", route: "PO", indication: "Cholesterol", discussed: false },
  ]

  const problems = [
    { name: "Major Depressive Disorder", status: "Active", onset: "2023-01-15", discussed: true },
    { name: "Type 2 Diabetes", status: "Active", onset: "2022-06-10", discussed: false },
    { name: "Hypertension", status: "Active", onset: "2021-03-22", discussed: false },
    { name: "Tension Headaches", status: "Resolved", onset: "2023-11-01", discussed: false },
  ]

  const vitals = {
    blood_pressure: "128/82",
    heart_rate: "72",
    temperature: "98.6°F",
    oxygen_saturation: "98%",
    weight: "185 lbs",
    BMI: "26.1",
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-7xl">
        {/* Enhanced Header with Visit Timeline and Patient Status */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Sarah Johnson</h1>
              <p className="text-gray-600">DOB: 03/15/1985 • MRN: 12345 • Age: 39</p>
            </div>
            <div className="flex items-center gap-4">
              {/* Patient Status */}
              <div className="flex items-center gap-2 rounded-lg border bg-white px-3 py-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium text-gray-900">Roomed</span>
                <span className="text-sm text-gray-600">• Room 3B</span>
              </div>

              <Button
                variant={isRecording ? "destructive" : "default"}
                onClick={() => setIsRecording(!isRecording)}
                className="flex items-center gap-2"
              >
                {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                {isRecording ? "Stop Recording" : "Start Recording"}
              </Button>
            </div>
          </div>

          {/* Visit Timeline with Enhanced Information */}
          <div className="mt-4 rounded-lg border bg-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div>
                  <span className="text-sm font-medium text-gray-900">Last Visit:</span>
                  <span className="ml-2 text-sm text-gray-600">November 15, 2024</span>
                </div>
                <div className="h-4 border-l border-gray-300"></div>
                <div>
                  <span className="text-sm font-medium text-gray-900">Visit Type:</span>
                  <span className="ml-2 text-sm text-gray-600">Follow-up</span>
                </div>
                <div className="h-4 border-l border-gray-300"></div>
                <div>
                  <span className="text-sm font-medium text-gray-900">Provider:</span>
                  <span className="ml-2 text-sm text-gray-600">Dr. Smith</span>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setShowTimeline(!showTimeline)}>
                Recent Visits
                {showTimeline ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
              </Button>
            </div>

            {/* Last Visit Summary */}
            <div className="mt-3 rounded-lg bg-gray-50 p-3">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Last Visit Summary & Goals</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Discussion:</strong> Reviewed depression symptoms and medication response. Patient reported
                improved mood but continued sleep difficulties. Discussed lifestyle modifications and stress management
                techniques.
              </p>
              <p className="text-sm text-gray-700">
                <strong>Goals for Today:</strong> Assess sertraline effectiveness, review sleep patterns, consider sleep
                hygiene counseling, check diabetes management and recent lab results.
              </p>
            </div>

            {showTimeline && (
              <div className="mt-4 border-t pt-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-blue-500"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Today - Follow-up Visit</span>
                        <span className="text-xs text-gray-500">In Progress</span>
                      </div>
                      <p className="text-xs text-gray-600 mb-1">Depression management, medication review</p>
                      <div className="text-xs text-gray-500">
                        <strong>Goals:</strong> Assess current treatment response, review sleep issues
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-gray-400"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Nov 15, 2024 - Follow-up</span>
                        <span className="text-xs text-gray-500">Completed</span>
                      </div>
                      <p className="text-xs text-gray-600 mb-1">Sertraline dose adjustment, labs reviewed</p>
                      <div className="text-xs text-gray-500">
                        <strong>Summary:</strong> Increased sertraline to 50mg daily. Patient reported mild improvement
                        in mood. Sleep still disrupted.
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        <strong>Goals Met:</strong> Medication optimization, lab review completed
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-gray-400"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Oct 12, 2024 - Initial Visit</span>
                        <span className="text-xs text-gray-500">Completed</span>
                      </div>
                      <p className="text-xs text-gray-600 mb-1">New patient evaluation, depression screening</p>
                      <div className="text-xs text-gray-500">
                        <strong>Summary:</strong> PHQ-9 score of 14. Started sertraline 25mg daily. Discussed therapy
                        referral.
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        <strong>Goals Met:</strong> Initial assessment, treatment plan established
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-gray-400"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Sep 28, 2024 - Annual Physical</span>
                        <span className="text-xs text-gray-500">Completed</span>
                      </div>
                      <p className="text-xs text-gray-600 mb-1">Routine physical, diabetes screening</p>
                      <div className="text-xs text-gray-500">
                        <strong>Summary:</strong> Overall health stable. A1C elevated at 7.2%. Mood concerns noted.
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        <strong>Goals Met:</strong> Annual screening completed, diabetes management reviewed
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <Button variant="ghost" size="sm" className="text-xs">
                    View Full Visit History
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Panel - Transcription */}
          <div className="col-span-4">
            <Card className="h-[calc(100vh-200px)]">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Live Transcription
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[calc(100vh-300px)] px-4">
                  <div className="space-y-4">
                    <div className="rounded-lg bg-blue-50 p-3">
                      <div className="mb-1 flex items-center gap-2">
                        <Badge variant="outline" className="bg-blue-100 text-blue-700">
                          Dr. Smith
                        </Badge>
                        <span className="text-xs text-gray-500">10:23 AM</span>
                      </div>
                      <p className="text-sm">
                        How have you been feeling since we increased your sertraline dose last month?
                      </p>
                    </div>

                    <div className="rounded-lg bg-green-50 p-3">
                      <div className="mb-1 flex items-center gap-2">
                        <Badge variant="outline" className="bg-green-100 text-green-700">
                          Patient
                        </Badge>
                        <span className="text-xs text-gray-500">10:23 AM</span>
                      </div>
                      <p className="text-sm">
                        Much better actually. I'm sleeping better and my mood has improved significantly.
                      </p>
                    </div>

                    <div className="rounded-lg bg-blue-50 p-3">
                      <div className="mb-1 flex items-center gap-2">
                        <Badge variant="outline" className="bg-blue-100 text-blue-700">
                          Dr. Smith
                        </Badge>
                        <span className="text-xs text-gray-500">10:24 AM</span>
                      </div>
                      <p className="text-sm">
                        That's great to hear. Any side effects? And how's your diabetes management going?
                      </p>
                    </div>

                    <div className="rounded-lg bg-green-50 p-3">
                      <div className="mb-1 flex items-center gap-2">
                        <Badge variant="outline" className="bg-green-100 text-green-700">
                          Patient
                        </Badge>
                        <span className="text-xs text-gray-500">10:24 AM</span>
                      </div>
                      <p className="text-sm">
                        No side effects from the sertraline. My blood sugar has been more stable with the metformin.
                      </p>
                    </div>
                  </div>
                </ScrollArea>

                {/* Audio Controls */}
                <div className="border-t p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <Button variant="ghost" size="sm" onClick={() => setIsPlaying(!isPlaying)}>
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    <span className="text-xs text-gray-500">12:34 / 15:22</span>
                  </div>
                  <div className="h-8 w-full rounded bg-gray-200">
                    <div className="h-full w-3/4 rounded bg-blue-500 opacity-60"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Center Panel - SOAP Notes */}
          <div className="col-span-5">
            <div className="space-y-4">
              {/* Summary */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">
                    Follow-up visit for depression and diabetes management. Patient reports improved mood and sleep on
                    increased sertraline dose. Blood sugar control stable on metformin.
                  </p>
                </CardContent>
              </Card>

              {/* Problems */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Active Problems</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {problems
                      .filter((p) => p.status === "Active")
                      .map((problem) => (
                        <Badge
                          key={problem.name}
                          variant={problem.discussed ? "default" : "secondary"}
                          className={`cursor-pointer ${
                            problem.discussed ? "bg-blue-100 text-blue-800 ring-2 ring-blue-300" : ""
                          }`}
                          onClick={() => setSelectedProblem(problem.name)}
                        >
                          {problem.discussed && <Activity className="mr-1 h-3 w-3" />}
                          {problem.name}
                        </Badge>
                      ))}
                  </div>
                  {selectedProblem && (
                    <div className="mt-3 rounded-lg border bg-gray-50 p-3">
                      <h4 className="font-medium">{selectedProblem}</h4>
                      <p className="text-sm text-gray-600">Status: Active • Onset: 2023-01-15</p>
                      <p className="text-sm text-gray-600">Currently being discussed in conversation</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* SOAP Sections */}
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Subjective</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">
                      Patient reports improved mood and sleep since sertraline dose increase. No side effects noted.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Objective</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">
                      Patient appears well. Mood improved, affect brighter. Vital signs stable.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Assessment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">
                      Depression responding well to increased sertraline. Diabetes well-controlled on metformin.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Plan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">
                      Continue sertraline 50mg daily. Follow-up in 3 months. Continue metformin for diabetes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Right Panel - Vitals & Medications */}
          <div className="col-span-3">
            <div className="space-y-4">
              {/* Vitals */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Heart className="h-5 w-5" />
                    Vitals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">BP:</span>
                      <span className="text-sm font-medium">{vitals.blood_pressure}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">HR:</span>
                      <span className="text-sm font-medium">{vitals.heart_rate} bpm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Temp:</span>
                      <span className="text-sm font-medium">{vitals.temperature}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">O2 Sat:</span>
                      <span className="text-sm font-medium">{vitals.oxygen_saturation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Weight:</span>
                      <span className="text-sm font-medium">{vitals.weight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">BMI:</span>
                      <span className="text-sm font-medium">{vitals.BMI}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Medications */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Pill className="h-5 w-5" />
                    Medications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {/* Currently Discussed Medication */}
                    {medications
                      .filter((med) => med.discussed)
                      .map((med) => (
                        <div key={med.name} className="rounded-lg border-2 border-blue-200 bg-blue-50 p-3">
                          <div className="flex items-center gap-2">
                            <Activity className="h-4 w-4 text-blue-600" />
                            <Badge variant="outline" className="bg-blue-100 text-blue-700">
                              Currently Discussed
                            </Badge>
                          </div>
                          <div className="mt-2">
                            <h4 className="font-medium text-blue-900">{med.name}</h4>
                            <p className="text-sm text-blue-700">
                              {med.dose} {med.route} {med.frequency}
                            </p>
                            <p className="text-xs text-blue-600">For: {med.indication}</p>
                          </div>
                        </div>
                      ))}

                    {/* Other Medications */}
                    {medications
                      .filter((med) => !med.discussed)
                      .slice(0, expandedMeds ? undefined : 2)
                      .map((med) => (
                        <div key={med.name} className="rounded-lg border p-3">
                          <h4 className="font-medium">{med.name}</h4>
                          <p className="text-sm text-gray-600">
                            {med.dose} {med.route} {med.frequency}
                          </p>
                          <p className="text-xs text-gray-500">For: {med.indication}</p>
                        </div>
                      ))}

                    {/* Expand/Collapse Button */}
                    <Button variant="ghost" size="sm" onClick={() => setExpandedMeds(!expandedMeds)} className="w-full">
                      {expandedMeds ? (
                        <>
                          <ChevronUp className="mr-2 h-4 w-4" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="mr-2 h-4 w-4" />
                          Show All Medications ({medications.length - 1} more)
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Historical Information */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">History</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="family" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="family" className="text-xs">
                        Family
                      </TabsTrigger>
                      <TabsTrigger value="medical" className="text-xs">
                        Medical
                      </TabsTrigger>
                      <TabsTrigger value="social" className="text-xs">
                        Social
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="family" className="mt-3">
                      <div className="space-y-2">
                        <div className="text-sm">
                          <span className="font-medium">Father:</span> Diabetes, HTN
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Mother:</span> Depression, Anxiety
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Siblings:</span> None significant
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="medical" className="mt-3">
                      <div className="space-y-2">
                        <div className="text-sm">No prior hospitalizations</div>
                        <div className="text-sm">Appendectomy 2010</div>
                        <div className="text-sm">No known allergies</div>
                      </div>
                    </TabsContent>
                    <TabsContent value="social" className="mt-3">
                      <div className="space-y-2">
                        <div className="text-sm">Non-smoker</div>
                        <div className="text-sm">Occasional alcohol use</div>
                        <div className="text-sm">Works as teacher</div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Pill className="mr-2 h-4 w-4" />
                      Fill Prescription
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Follow-up
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <FileText className="mr-2 h-4 w-4" />
                      Order Labs
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
