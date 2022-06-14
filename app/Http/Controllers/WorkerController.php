<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Worker;
use App\Models\Company;

use App\Http\Requests\WorkerRequest;
use App\Http\Resources\WorkerResource;
use App\Http\Controllers\Controller;



class WorkerController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return WorkerResource::collection(Worker::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(WorkerRequest $request)
    {
        $worker = Worker::create($request->validated());

        return new WorkerResource($worker);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Worker  $worker
     * @return \Illuminate\Http\Response
     */
    public function show(Worker $worker)
    {
        return new WorkerResource($worker);
    }


    public function show1($id)
    {
        $workers = Company::find($id)->workers;
        return new WorkerResource($workers);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Worker  $worker
     * @return \Illuminate\Http\Response
     */
    public function update(WorkerRequest $request, Worker $worker)
    {
        $worker->update($request->validated());

        return new CompanyResource($worker);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Worker  $worker
     * @return \Illuminate\Http\Response
     */
    public function destroy(Worker $worker)
    {
        $worker->delete();

        return response()->noContent();
    }
}

