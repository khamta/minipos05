<template>
    <div>
        <div class="col-md-12 col-lg-12">
            <div class="row">
                <div class="col-lg-3 col-md-3 col-6 mb-4">
                    <div class="card">
                        <div class="card-body pb-0">
                            <span class="d-block fw-semibold">ລາຍຮັບ</span>
                        </div>

                        <div class="p-3 pt-2 d-flex justify-content-between">
                            <i class="bx bx-line-chart"></i>
                            <span>aaaaa</span>
                        </div>
                        <div class="resize-triggers">
                            <div class="expand-trigger">
                                <div style="width: 174px; height: 180px"></div>
                            </div>
                            <div class="contract-trigger"></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-6 mb-4">
                    <div class="card">
                        <div class="card-body pb-0">
                            <span class="d-block fw-semibold">ລາຍຈ່າຍ</span>
                        </div>

                        <div class="p-3 pt-2 d-flex justify-content-between">
                            <i class="bx bx-line-chart"></i>
                            <span>aaaaa</span>
                        </div>
                        <div class="resize-triggers">
                            <div class="expand-trigger">
                                <div style="width: 174px; height: 180px"></div>
                            </div>
                            <div class="contract-trigger"></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-6 mb-4">
                    <div class="card">
                        <div class="card-body pb-0">
                            <span class="d-block fw-semibold">ກຳໄລ</span>
                        </div>

                        <div class="p-3 pt-2 d-flex justify-content-between">
                            <i class="bx bx-line-chart"></i>
                            <span>aaaaa</span>
                        </div>
                        <div class="resize-triggers">
                            <div class="expand-trigger">
                                <div style="width: 174px; height: 180px"></div>
                            </div>
                            <div class="contract-trigger"></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-6 mb-4">
                    <div class="card">
                        <div class="card-body pb-0">
                            <span class="d-block fw-semibold">ສະຕອກສິນຄ້າ</span>
                        </div>

                        <div class="p-3 pt-2 d-flex justify-content-between">
                            <i class="bx bx-line-chart"></i>
                            <span>aaaaa</span>
                        </div>
                        <div class="resize-triggers">
                            <div class="expand-trigger">
                                <div style="width: 174px; height: 180px"></div>
                            </div>
                            <div class="contract-trigger"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <h5 class="card-header">Hoverable rows</h5>
                        {{ formstore }}/{{ formtype }}
                        <hr />
                        {{ storedata }}
                        <hr />
                        <div class="d-flex justify-content-end me-4">
                            <button
                                type="button"
                                class="btn rounded-pill btn-info me-2"
                                v-if="!formshow"
                                @click="add_store()"
                            >
                                ເພີ່ມ
                            </button>
                            <button
                                type="button"
                                class="btn rounded-pill btn-success me-2"
                                v-if="formshow"
                                @click="save_data()"
                            >
                                ບັນທຶກ
                            </button>
                            <button
                                type="button"
                                class="btn rounded-pill btn-warning me-2"
                                v-if="formshow"
                                @click="cencel_store()"
                            >
                                ຍົກເລີກ
                            </button>
                        </div>
                        <div class="row p-2 me-2" v-if="formshow">
                            <div class="col-md-4">aaaaaa</div>
                            <div class="col-md-8">
                                <div class="mb-3">
                                    <label
                                        for="exampleFormControlInput1"
                                        class="form-label"
                                        >ຊື່ສິນຄ້າ</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="ປ້ອນຊື່ສິນຄ້າ..."
                                        v-model="formstore.name"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label
                                        for="exampleFormControlInput1"
                                        class="form-label"
                                        >ຈຳນວນ</label
                                    >
                                    <input
                                        type="number"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="ປ້ອນຈຳນວນສິນຄ້າ..."
                                        v-model="formstore.amount"
                                    />
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label
                                                for="exampleFormControlInput1"
                                                class="form-label"
                                                >ລາຄາຊື້</label
                                            >
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="exampleFormControlInput1"
                                                placeholder="ປ້ອນລາຄາຊື້..."
                                                v-model="formstore.price_buy"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label
                                                for="exampleFormControlInput1"
                                                class="form-label"
                                                >ລາຄາຂາຍ</label
                                            >
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="exampleFormControlInput1"
                                                placeholder="ປ້ອນລາຄາຂາຍ"
                                                v-model="formstore.price_sell"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="table-responsive text-nowrap"
                            v-if="!formshow"
                        >
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th style="width: 150px">
                                            ລະຫັດສິນຄ້າ
                                        </th>
                                        <th>ຊື່ສິນຄ້າ</th>
                                        <th>ຈຳນວນ</th>
                                        <th>ລາຄາຊື້</th>
                                        <th>ຈັດການ</th>
                                    </tr>
                                </thead>
                                <tbody class="table-border-bottom-0">
                                    <tr
                                        v-for="list in storedata"
                                        :key="list.id"
                                    >
                                        <td>
                                            {{ list.id }}
                                        </td>
                                        <td>{{ list.name }}</td>
                                        <td>{{ list.amount }}</td>
                                        <td>{{ list.price_buy }}</td>
                                        <td>
                                            <div class="dropdown">
                                                <button
                                                    type="button"
                                                    class="btn p-0 dropdown-toggle hide-arrow"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i
                                                        class="bx bx-dots-vertical-rounded"
                                                    ></i>
                                                </button>
                                                <div class="dropdown-menu">
                                                    <a
                                                        class="dropdown-item"
                                                        href="javascript:void(0);"
                                                        @click="
                                                            edit_data(list.id)
                                                        "
                                                        ><i
                                                            class="bx bx-edit-alt me-1"
                                                        ></i>
                                                        ແກ້ໄຂ</a
                                                    >
                                                    <a
                                                        class="dropdown-item"
                                                        href="javascript:void(0);"
                                                        @click="
                                                            del_data(list.id)
                                                        "
                                                        ><i
                                                            class="bx bx-trash me-1"
                                                        ></i>
                                                        ລືບ</a
                                                    >
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Minipos5Store",

    data() {
        return {
            edit_id: "",
            formshow: false,
            formtype: false,
            storedata: [],
            formstore: {
                name: "",
                amount: "",
                price_buy: "",
                price_sell: "",
            },
        };
    },

    mounted() {},

    methods: {
        add_store() {
            this.formshow = true;
        },
        cencel_store() {
            this.formshow = false;
        },
        save_data() {
            if (this.formtype) {
                //update
                this.storedata.find((i) => i.id == this.edit_id).name =
                    this.formstore.name;
                this.storedata.find((i) => i.id == this.edit_id).amount =
                    this.formstore.amount;
                this.storedata.find((i) => i.id == this.edit_id).price_buy =
                    this.formstore.price_buy;
                this.storedata.find((i) => i.id == this.edit_id).price_sell =
                    this.formstore.price_sell;
            } else {
                // this.storedata.push({
                //     id: Math.floor(Math.random() * 1000),
                //     name: this.formstore.name,
                //     amount: this.formstore.amount,
                //     price_buy: this.formstore.price_buy,
                //     price_sell: this.formstore.price_sell,
                // });
                //ທຳການຍິງຂໍ້ມູນໄປທີ່ແບກເອນເພື່ອທຳການບັນທຶກຂໍ້ມູນ
                let formDataStore = new FormData();
                formDataStore.append("name", this.formstore.name);
                formDataStore.append("amount", this.formstore.amount);
                formDataStore.append("price_buy", this.formstore.price_buy);
                formDataStore.append("price_sell", this.formstore.price_sell);
                this.$axios
                    .post("/api/store/add", formDataStore)
                    .then((response) => {
                        console.log("sent data success!");
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }

            // ຄຳສັ່ງເຄຍຟອມ
            this.formstore.name = "";
            this.formstore.amount = "";
            this.formstore.price_buy = "";
            this.formstore.price_sell = "";
            //close form
            this.formshow = false;
            this.formtype = false;
        },
        edit_data(id) {
            this.edit_id = id;
            this.formtype = true;
            let item = this.storedata.find((i) => i.id == id);
            this.formstore.name = item.name;
            this.formstore.amount = item.amount;
            this.formstore.price_buy = item.price_buy;
            this.formstore.price_sell = item.price_sell;
            this.formshow = true;
        },
        del_data(id) {
            let index = this.storedata.map((i) => i.id).indexOf(id);
            this.storedata.splice(index, 1);
        },
    },
};
</script>

<style lang="scss" scoped></style>
