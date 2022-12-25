<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\store;

class storeController extends Controller
{
    //
    public function add(Request $request)
    {
        //ບັນທຶກຂໍ້ມູນ
        $store = new store();
        $store->name = $request->name;
        $store->amount = $request->amount;
        $store->price_buy = $request->price_buy;
        $store->price_sell = $request->price_sell;
        $store->save();
    }
}