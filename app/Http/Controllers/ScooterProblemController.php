<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\ApiResponse;
use Illuminate\Http\JsonResponse;
use App\Models\ScooterProblem;
use Illuminate\Support\Facades\DB;
use Exception;
use Illuminate\Http\Resources\Json\JsonResource;

class ScooterProblemController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request): JsonResponse
    {
        $problems = ScooterProblem::all();


        return response()->json(array('data' => $problems));

    }

    public function add_scooter_problem(Request $request): JsonResponse
    {
        $description = $request->input('description');
        $scooter_id = $request->input('scooter_id');
        $reporter_email = $request->input('reporter_email');

        $probleme = new ScooterProblem([
            'description' => $description,
            'scooter_id' => $scooter_id,
            'reporter_email' => $reporter_email,
            'resolved' => false
        ]);

        $probleme->save();


        return response()->json(array('data' => $probleme));
    }
}
